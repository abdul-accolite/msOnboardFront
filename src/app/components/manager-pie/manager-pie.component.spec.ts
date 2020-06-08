import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerPieComponent } from './manager-pie.component';

describe('ManagerPieComponent', () => {
  let component: ManagerPieComponent;
  let fixture: ComponentFixture<ManagerPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
