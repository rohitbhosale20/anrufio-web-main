import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseTechnologiesComponent } from './expertise-technologies.component';

describe('ExpertiseTechnologiesComponent', () => {
  let component: ExpertiseTechnologiesComponent;
  let fixture: ComponentFixture<ExpertiseTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertiseTechnologiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertiseTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
