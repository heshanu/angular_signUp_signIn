import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchPasswordComponent } from './match-password.component';

describe('MatchPasswordComponent', () => {
  let component: MatchPasswordComponent;
  let fixture: ComponentFixture<MatchPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
