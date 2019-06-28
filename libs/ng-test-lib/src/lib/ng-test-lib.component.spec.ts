import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTestLibComponent } from './ng-test-lib.component';

describe('NgTestLibComponent', () => {
  let component: NgTestLibComponent;
  let fixture: ComponentFixture<NgTestLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTestLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTestLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
