import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegvalidateComponent } from './regvalidate.component';

describe('RegvalidateComponent', () => {
  let component: RegvalidateComponent;
  let fixture: ComponentFixture<RegvalidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegvalidateComponent]
    });
    fixture = TestBed.createComponent(RegvalidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
