import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-tab',
  templateUrl: './info-tab.component.html',
  styleUrls: ['./info-tab.component.css']
})
export class InfoTabComponent implements OnInit {
  @Input() key: string = "key"
  @Input() value: string = "value"

  constructor() { }

  ngOnInit(): void {
  }

}
