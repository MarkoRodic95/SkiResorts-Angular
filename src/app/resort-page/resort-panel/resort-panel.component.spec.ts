import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortPanelComponent } from './resort-panel.component';

describe('ResortPanelComponent', () => {
  let component: ResortPanelComponent;
  let fixture: ComponentFixture<ResortPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResortPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
