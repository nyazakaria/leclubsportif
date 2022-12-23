import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AccountService } from '../../services/account.service';
@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.scss'],
})
export class NewaccountComponent implements OnInit {
  createAccountForm!: FormGroup;
  showPassWordFlag = false;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.newAccountForm();
  }

  showPassWord() {
    this.showPassWordFlag = !this.showPassWordFlag;
  }

  newAccountForm() {
    this.createAccountForm = this.fb.group({
      email: [
        '',
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ],
      passWord: [
        '',
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(15),
      ],
      passwordConfirm: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      anneeNaissance: ['', Validators.required],
      adresse: ['', Validators.required],
      adressecmpl: ['', Validators.required],
      ville: ['', Validators.required],
      codePostal: ['', Validators.required],
      sexe: ['', Validators.required],
      abonnements: ['', Validators.required],
      club: ['', Validators.required],
      telephone: ['', Validators.required],
      entrainement: [false],
      newsletter: [false],
      conditionsgenerales: [false, Validators.requiredTrue],
    });
  }

  createNewAccount(form: any) {
    const registerForm = {
      customerId: 1,
      customerName: form.name,
      customerLastname: form.lastname,
      address: form.adresse,
      cdp: form.codePostal,
      city: form.ville,
      state: 'France',
      email: form.email,
      phone: form.telephone,
      role: 'user',
    };
    console.log(registerForm, 'fomr');
    this.accountService.createUserAccount(registerForm);
  }

  // https://stackoverflow.com/questions/51605737/confirm-password-validation-in-angular-6
}
