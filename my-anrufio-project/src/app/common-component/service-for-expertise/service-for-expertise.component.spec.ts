import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceForExpertiseComponent } from './service-for-expertise.component';

describe('ServiceForExpertiseComponent', () => {
  let component: ServiceForExpertiseComponent;
  let fixture: ComponentFixture<ServiceForExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceForExpertiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceForExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
