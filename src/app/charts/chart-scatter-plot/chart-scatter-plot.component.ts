import { Component, OnInit, AfterContentInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-chart-scatter-plot',
  templateUrl: './chart-scatter-plot.component.html',
  styleUrls: ['./chart-scatter-plot.component.css']
})
export class ChartScatterPlotComponent implements AfterContentInit {

  h:number = 400;
  w:number = 900;
  labels;
  svg;
  dots;

  monthSales = [
    {'month': 10, 'sales': 100},
    {'month': 20, 'sales': 130},
    {'month': 30, 'sales': 250},
    {'month': 40, 'sales': 300},
    {'month': 50, 'sales': 265},
    {'month': 60, 'sales': 225},
    {'month': 70, 'sales': 180},
    {'month': 80, 'sales': 120},
    {'month': 90, 'sales': 145},
    {'month': 100, 'sales': 130}
  ]

  constructor() { }

  ngAfterContentInit() {
    this.svg = d3.select('body')
                  .append('svg')
                  .attr('width', this.w)
                  .attr('height', this.h);
    this.dots = this.svg.selectAll('circle')
                        .data(this.monthSales)
                        .enter()
                        .append('circle')
                        .attr('cx', (d: any) => d.month * 3)
                        .attr('cy', (d: any) => this.h - d.sales)
                        .attr('r', '5')
                        .attr('fill', (d) => this.salesKPI(d.sales));
    this.labels = this.svg.selectAll('text')
                          .data(this.monthSales)
                          .enter()
                          .append('text')
                          .text(d => this.showMinMax(this.monthSales, 'sales', d.sales, 'minmax'))
                          .attr('x', d => d.month * 3 - 25)
                          .attr('y', d => this.h - d.sales)
                          .attr('font-family', 'sans-serif')
                          .attr('fill', '#666666')
                          .attr('text-anchor', 'start')
                          .attr('dy', '.35em')
                          .attr('font-size', 14)
                          .attr('font-weight', (d, i) => {
                            if (i === 0 || i === (this.monthSales.length - 1)) {
                              return 'bold';
                            } else {
                              return 'normal';
                            }
                          });

  }

  salesKPI(d) {
    return d >= 250 ? '#33cc66' : '#666666';
  }

  showMinMax(ds, col, val, type) {
    const max = d3.max(ds, (d) => d[col]);
    const min = d3.min(ds, (d) => d[col]);

    if (type === 'minmax' && (val === max || val === min)) {
      return val;
    } else {
      if (type === 'all') {
        return val;
      }
    }

  }

}
