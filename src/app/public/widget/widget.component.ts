import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
})
export class WidgetComponent implements OnInit {
  @Input() title: string = 'TItle';
  @Input() trucks_in: number = 0;
  @Input() with_driver: number = 0;
  @Input() no_driver: number = 0;
  @Input() average: number = 0;
  @Input() hh: string = '00';
  @Input() mm: string = '00';
  @Input() ss: string = '00';
  @Input() cost: string = '000.000';
  @Input() cpm: string = '0.00';
  @Input() showErrorIcon = false;
  @Input() iconSvg = '';

  constructor() {}

  ngOnInit(): void {
    this.iconSvg = 'assets/' + this.iconSvg + '.svg';
  }
}
