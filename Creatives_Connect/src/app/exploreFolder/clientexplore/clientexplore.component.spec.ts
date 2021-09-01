import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientexploreComponent } from './clientexplore.component';

describe('ClientexploreComponent', () => {
  let component: ClientexploreComponent;
  let fixture: ComponentFixture<ClientexploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientexploreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientexploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
