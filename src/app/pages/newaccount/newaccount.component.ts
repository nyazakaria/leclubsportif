import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.scss'],
})
export class NewaccountComponent implements OnInit {
  createAccountForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.newAccountForm();
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
      passwordConfirm: [
        '',
        Validators.required,
        Validators.pattern(this.createAccountForm.controls['passWord'].value),
      ],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      anneeNaissance: ['', Validators.required],
      adresse: ['', Validators.required],
      adressecmpl: ['', Validators.required],
      ville: ['', Validators.required],
      codePostal: ['', Validators.required],
    });
  }

  createNewAccount() {}
}
