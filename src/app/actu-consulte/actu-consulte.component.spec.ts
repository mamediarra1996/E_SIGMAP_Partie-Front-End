import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuConsulteComponent } from './actu-consulte.component';

describe('ActuConsulteComponent', () => {
  let component: ActuConsulteComponent;
  let fixture: ComponentFixture<ActuConsulteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActuConsulteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActuConsulteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
