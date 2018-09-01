import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAnnoncesViewComponent } from './user-annonces-view.component';

describe('UserAnnoncesViewComponent', () => {
  let component: UserAnnoncesViewComponent;
  let fixture: ComponentFixture<UserAnnoncesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAnnoncesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAnnoncesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
