import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PWAComponent } from './pwa.component';

describe('PWAComponent', () => {
  let component: PWAComponent;
  let fixture: ComponentFixture<PWAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PWAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PWAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
