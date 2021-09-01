import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimrefundComponent } from './claimrefund.component';

describe('ClaimrefundComponent', () => {
  let component: ClaimrefundComponent;
  let fixture: ComponentFixture<ClaimrefundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimrefundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimrefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
