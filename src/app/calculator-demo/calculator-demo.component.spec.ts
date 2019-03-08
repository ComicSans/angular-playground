import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorDemoComponent } from './calculator-demo.component';

describe('CalculatorDemoComponent', () => {
  let component: CalculatorDemoComponent;
  let fixture: ComponentFixture<CalculatorDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
