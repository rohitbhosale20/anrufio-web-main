import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeujsComponent } from './veujs.component';

describe('VeujsComponent', () => {
  let component: VeujsComponent;
  let fixture: ComponentFixture<VeujsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeujsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeujsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
