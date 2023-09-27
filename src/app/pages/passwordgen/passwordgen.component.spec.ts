import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordgenComponent } from './passwordgen.component';

describe('PasswordgenComponent', () => {
  let component: PasswordgenComponent;
  let fixture: ComponentFixture<PasswordgenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordgenComponent]
    });
    fixture = TestBed.createComponent(PasswordgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
