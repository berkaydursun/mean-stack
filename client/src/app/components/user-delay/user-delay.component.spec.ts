import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDelayComponent } from './user-delay.component';

describe('UserDelayComponent', () => {
  let component: UserDelayComponent;
  let fixture: ComponentFixture<UserDelayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDelayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
