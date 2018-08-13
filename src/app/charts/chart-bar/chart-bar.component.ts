import { Component, AfterContentInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.css']
})
export class ChartBarComponent implements AfterContentInit {

  w = 800;
  h = 300;
  dataset = [5, 10, 13, 19, 21, 25, 11, 25, 22, 22, 18, 7];
  padding = 2;
  svg;

  constructor() { }

  ngAfterContentInit() {
    console.log(this.dataset.length);

    this.svg = d3.select('body')
                  .append('svg')
                  .attr('width', this.w)
                  .attr('height', this.h);

    this.svg.selectAll('rect')
            .data(this.dataset)
            .enter()
            .append('rect')
            .attr('x', (d, i) => i * (this.w / this.dataset.length))
            .attr('y', d => this.h - (d * 8))
            .attr('width', (this.w / this.dataset.length) - this.padding)
            .attr('height', d => d * 8)
            .attr('fill', d => this.pickColor(d));

    this.svg.selectAll('text')
    .data(this.dataset)
    .enter()
    .append('text')
    .text(d => d)
    .attr('text-anchor', 'middle')
    .attr('x', (d, i) => i * (this.w / this.dataset.length) + (this.w / this.dataset.length - this.padding) / 2)
    .attr('y', d => this.h - (d * 8) - 8)
    .attr('font-family', 'sans-serif');

  }

  pickColor(v) {
    return v <= 20 ? '#666666' : '#ff0000';
  }

}
