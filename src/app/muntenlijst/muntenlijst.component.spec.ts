import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuntenlijstComponent } from './muntenlijst.component';

describe('MuntenlijstComponent', () => {
  let component: MuntenlijstComponent;
  let fixture: ComponentFixture<MuntenlijstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuntenlijstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuntenlijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
