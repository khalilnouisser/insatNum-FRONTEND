import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionEquipmentsComponent } from './reception-equipments.component';

describe('ReceptionEquipmentsComponent', () => {
  let component: ReceptionEquipmentsComponent;
  let fixture: ComponentFixture<ReceptionEquipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionEquipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionEquipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
