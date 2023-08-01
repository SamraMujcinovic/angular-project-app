import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-division',
  templateUrl: './health-division.component.html',
  styleUrls: ['./health-division.component.css'],
})
export class HealthDivisionComponent implements OnInit {
  @Input() name: string = '';
  @Input() number: number = 1;
  @Input() showErrorIcon = false;

  constructor() {}

  ngOnInit(): void {
    console.log(this.name);
  }
}
