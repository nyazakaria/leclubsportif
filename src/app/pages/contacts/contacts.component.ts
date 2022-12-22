import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private Scontact: ContactService,
    private Router: Router
  ) {}

  ngOnInit(): void {
    this.contactFormBuild();
  }

  contactFormBuild() {
    this.contactForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      message: ['', Validators.required],
      newsletter: false,
    });
  }

  sendMessage(form: Contact) {
    this.Scontact.postMessage(form);
    this.Router.navigate(['./home']);
  }
}
