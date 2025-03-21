import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStackDevelopmentComponent } from './full-stack-development.component';

describe('FullStackDevelopmentComponent', () => {
  let component: FullStackDevelopmentComponent;
  let fixture: ComponentFixture<FullStackDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullStackDevelopmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullStackDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
