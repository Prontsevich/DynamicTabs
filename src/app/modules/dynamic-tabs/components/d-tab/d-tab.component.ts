import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'd-tab',
  templateUrl: './d-tab.component.html',
  styleUrls: ['./d-tab.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DTabComponent {
  @Input() title: string;
  @Input() id: string;
  @Input() active = false;
  @Input() template;
  @Input() dataContext;
  @Input() url: string;

}
