import { Component, Input } from '@angular/core';

import { Contact } from '../../../../model/contact';

@Component({
  selector: 'contacts-list',
  templateUrl: 'contacts-list.component.html'
})

export class ContactsListComponent {
  @Input() contacts: Contact[] = [];
}
