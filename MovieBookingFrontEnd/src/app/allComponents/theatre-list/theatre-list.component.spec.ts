import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreListComponent } from './theatre-list.component';

describe('TheatreListComponent', () => {
  let component: TheatreListComponent;
  let fixture: ComponentFixture<TheatreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheatreListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
