import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxangularComponent } from './ngxangular.component';

describe('NgxangularComponent', () => {
  let component: NgxangularComponent;
  let fixture: ComponentFixture<NgxangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
