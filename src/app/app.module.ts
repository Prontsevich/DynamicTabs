import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DynamicTabsModule } from './modules/dynamic-tabs/dynamic-tabs.module';
import { ContactModule } from './modules/contact/contact.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamicTabsModule,
    ContactModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
