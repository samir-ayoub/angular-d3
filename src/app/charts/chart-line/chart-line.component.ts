import { Component, OnInit, AfterContentInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.css']
})
export class ChartLineComponent implements AfterContentInit {

  h:number = 400;
  w:number = 700;

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

  labels;
  lineFun;
  svg;
  viz;
 

  constructor() { }

  ngAfterContentInit() {

  this.lineFun = d3.line()
      .x((d:any) => d.month * 3)
      .y((d:any) => this.h - d.sales)
      .curve(d3.curveLinear)
  

  this.svg = d3.select('body')
                .append('svg')
                .attr('width', this.w)
                .attr('height', this.h);
  
  this.viz = this.svg.append('path')
                .attr('d', this.lineFun(this.monthSales))
                .attr('stroke', 'purple')
                .attr('stroke-width', 2)
                .attr('fill', 'none');
  
  this.labels = this.svg.selectAll('text')
                        .data(this.monthSales)
                        .enter()
                        .append('text')
                        .text(d => d.sales)
                        .attr('x',d => d.month * 3 - 25)
                        .attr('y', d => this.h - d.sales)
                        .attr('font-family', 'sans-serif')
                        .attr('fill', '#666666')
                        .attr('text-anchor', 'start')
                        .attr('dy', '.35em')
                        .attr('font-size', 14)
                        .attr('font-weight', (d,i) => {
                          if (i === 0 || i ==(this.monthSales.length-1)) {
                            return 'bold'
                          } else {
                            return 'normal'
                          }
                        })
  }
}
