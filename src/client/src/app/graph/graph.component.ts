import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { * as d3 } from 'd3';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphComponent implements OnInit {

  constructor() {
    this.graph = d3.select('svg');
  }

  ngOnInit(): void {
  }

}
