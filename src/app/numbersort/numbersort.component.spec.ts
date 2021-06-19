import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersortComponent } from './numbersort.component';

describe('NumbersortComponent', () => {
  let component: NumbersortComponent;
  let fixture: ComponentFixture<NumbersortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbersortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbersortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
