import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartScatterPlotComponent } from './chart-scatter-plot.component';

describe('ChartScatterPlotComponent', () => {
  let component: ChartScatterPlotComponent;
  let fixture: ComponentFixture<ChartScatterPlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartScatterPlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartScatterPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
