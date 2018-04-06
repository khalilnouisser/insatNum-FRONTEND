import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEquipementComponent } from './request-equipement.component';

describe('RequestEquipementComponent', () => {
  let component: RequestEquipementComponent;
  let fixture: ComponentFixture<RequestEquipementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestEquipementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
