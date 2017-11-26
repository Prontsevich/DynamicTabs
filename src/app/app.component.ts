import { Component } from '@angular/core';

import { Contact } from './model/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[] = [];

  constructor() {
    const contact = new Contact();
    contact.Name = 'Sergey';
    contact.Surname = 'Prontsevich';
    contact.Phone = '375257407201';
    contact.Email = 'prontsevich@gmail.com';

    this.contacts.push(contact);
  }
}
