import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreidComponent } from './exploreid.component';

describe('ExploreidComponent', () => {
  let component: ExploreidComponent;
  let fixture: ComponentFixture<ExploreidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
