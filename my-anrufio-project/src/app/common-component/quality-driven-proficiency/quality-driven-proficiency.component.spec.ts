import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityDrivenProficiencyComponent } from './quality-driven-proficiency.component';

describe('QualityDrivenProficiencyComponent', () => {
  let component: QualityDrivenProficiencyComponent;
  let fixture: ComponentFixture<QualityDrivenProficiencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualityDrivenProficiencyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualityDrivenProficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
