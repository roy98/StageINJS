import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActualiteComponent } from './form-actualite.component';

describe('FormActualiteComponent', () => {
  let component: FormActualiteComponent;
  let fixture: ComponentFixture<FormActualiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormActualiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
