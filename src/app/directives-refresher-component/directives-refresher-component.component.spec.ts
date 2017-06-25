import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesRefresherComponentComponent } from './directives-refresher-component.component';

describe('DirectivesRefresherComponentComponent', () => {
  let component: DirectivesRefresherComponentComponent;
  let fixture: ComponentFixture<DirectivesRefresherComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesRefresherComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesRefresherComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
