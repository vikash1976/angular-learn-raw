import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustComponentComponent } from './just-component.component';

describe('JustComponentComponent', () => {
  let component: JustComponentComponent;
  let fixture: ComponentFixture<JustComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
