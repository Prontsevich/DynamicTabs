import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicTabsComponent } from './components/dynamic-tabs/dynamic-tabs.component';
import { DTabComponent } from './components/d-tab/d-tab.component';
import { DynamicTabsDirective } from './directives/dynamic-tabs/dynamic-tabs.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DynamicTabsComponent, DTabComponent, DynamicTabsDirective],
  exports: [DynamicTabsComponent, DTabComponent]
})
export class DynamicTabsModule { }
