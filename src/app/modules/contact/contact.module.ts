import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactEditComponent } from './components/contact-edit/contact-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContactsListComponent, ContactEditComponent],
  exports: [ContactsListComponent, ContactEditComponent]
})
export class ContactModule { }
