import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.css']
})
export class LegendComponent implements OnInit {
  @Input() color: string = '#000000'
  @Input() text: string = 'Text';

  constructor() { }

  ngOnInit(): void {
  }

}
