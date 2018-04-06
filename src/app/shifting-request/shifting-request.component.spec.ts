import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftingRequestComponent } from './shifting-request.component';

describe('ShiftingRequestComponent', () => {
  let component: ShiftingRequestComponent;
  let fixture: ComponentFixture<ShiftingRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftingRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
