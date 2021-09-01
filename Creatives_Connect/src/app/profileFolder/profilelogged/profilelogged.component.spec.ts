import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileloggedComponent } from './profilelogged.component';

describe('ProfileloggedComponent', () => {
  let component: ProfileloggedComponent;
  let fixture: ComponentFixture<ProfileloggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileloggedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileloggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
