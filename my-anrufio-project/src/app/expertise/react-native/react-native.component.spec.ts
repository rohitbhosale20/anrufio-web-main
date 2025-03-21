import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactNativeComponent } from './react-native.component';

describe('ReactNativeComponent', () => {
  let component: ReactNativeComponent;
  let fixture: ComponentFixture<ReactNativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactNativeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactNativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
