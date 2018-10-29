import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilPubsComponent } from './accueil-pubs.component';

describe('AccueilPubsComponent', () => {
  let component: AccueilPubsComponent;
  let fixture: ComponentFixture<AccueilPubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilPubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilPubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
