import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedByWorldsComponent } from './trusted-by-worlds.component';

describe('TrustedByWorldsComponent', () => {
  let component: TrustedByWorldsComponent;
  let fixture: ComponentFixture<TrustedByWorldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustedByWorldsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustedByWorldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
