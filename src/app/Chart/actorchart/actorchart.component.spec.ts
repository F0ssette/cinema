import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorchartComponent } from './actorchart.component';

describe('ActorchartComponent', () => {
  let component: ActorchartComponent;
  let fixture: ComponentFixture<ActorchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
