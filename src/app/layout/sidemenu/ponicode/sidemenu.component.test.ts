import * as sidemenu_component from '../sidemenu.component';
import * as account_service from '../../../services/account.service';
import * as http from '@angular/common/http';

// @ponicode
describe('sidemenu_component.SidemenuComponent.sideMenu', () => {
  let inst2: any;
  let inst3: any;
  let inst4: any;
  let inst5: any;

  beforeEach(() => {
    inst2 = new http.HttpHandler();
    inst3 = new http.HttpClient(inst2);
    inst4 = new account_service.AccountService(inst3);
    inst5 = new sidemenu_component.SidemenuComponent(inst4);
  });

  test('0', () => {
    let result: any = inst5.sideMenu();
    expect(result).toMatchSnapshot();
  });
});
