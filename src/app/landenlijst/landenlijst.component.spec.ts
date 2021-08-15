import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandenlijstComponent } from './landenlijst.component';

describe('LandenlijstComponent', () => {
  let component: LandenlijstComponent;
  let fixture: ComponentFixture<LandenlijstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandenlijstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandenlijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
