import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DTabComponent } from './d-tab.component';

describe('DTabComponent', () => {
  let component: DTabComponent;
  let fixture: ComponentFixture<DTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
