import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLoadingCircleComponent } from './angular-loading-circle.component';

describe('AngularLoadingCircleComponent', () => {
  let component: AngularLoadingCircleComponent;
  let fixture: ComponentFixture<AngularLoadingCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularLoadingCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLoadingCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
