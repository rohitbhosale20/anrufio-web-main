import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeverlessComponent } from './severless.component';

describe('SeverlessComponent', () => {
  let component: SeverlessComponent;
  let fixture: ComponentFixture<SeverlessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeverlessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeverlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
