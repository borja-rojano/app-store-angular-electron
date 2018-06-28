import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElysComponent } from './elys.component';

describe('ElysComponent', () => {
  let component: ElysComponent;
  let fixture: ComponentFixture<ElysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
