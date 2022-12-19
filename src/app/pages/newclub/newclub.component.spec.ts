import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewclubComponent } from './newclub.component';

describe('NewclubComponent', () => {
  let component: NewclubComponent;
  let fixture: ComponentFixture<NewclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewclubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
