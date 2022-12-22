import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss'],
})
export class ConnexionComponent implements OnInit {
  connexionForm!: FormGroup;
  showPassWordFlag = false;
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.formuserConnexion();
  }

  showPassWord() {
    console.log(this.showPassWordFlag);
    this.showPassWordFlag = !this.showPassWordFlag;
  }

  formuserConnexion() {
    this.connexionForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    });
  }

  connexionToAccount(userForm: any) {
    console.log(userForm);
    this.accountService.login(userForm.email, userForm.password).subscribe();
  }
}
