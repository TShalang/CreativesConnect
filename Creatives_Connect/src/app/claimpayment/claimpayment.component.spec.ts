import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimpaymentComponent } from './claimpayment.component';

describe('ClaimpaymentComponent', () => {
  let component: ClaimpaymentComponent;
  let fixture: ComponentFixture<ClaimpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimpaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
