import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilPostsComponent } from './acceuil-posts.component';

describe('AcceuilPostsComponent', () => {
  let component: AcceuilPostsComponent;
  let fixture: ComponentFixture<AcceuilPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceuilPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
