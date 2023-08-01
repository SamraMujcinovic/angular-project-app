import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDivisionComponent } from './health-division.component';

describe('HealthDivisionComponent', () => {
  let component: HealthDivisionComponent;
  let fixture: ComponentFixture<HealthDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthDivisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
