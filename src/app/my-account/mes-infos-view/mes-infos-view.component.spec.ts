import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesInfosViewComponent } from './mes-infos-view.component';

describe('MesInfosViewComponent', () => {
  let component: MesInfosViewComponent;
  let fixture: ComponentFixture<MesInfosViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesInfosViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesInfosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
