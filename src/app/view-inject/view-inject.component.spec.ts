import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInjectComponent } from './view-inject.component';

describe('ViewInjectComponent', () => {
  let component: ViewInjectComponent;
  let fixture: ComponentFixture<ViewInjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
