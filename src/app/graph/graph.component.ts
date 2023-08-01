import { Component, OnInit } from '@angular/core';
import { Chart, LineController, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
Chart.register(LineController, CategoryScale, LinearScale, PointElement, LineElement);

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.renderGraph();
  }

  renderGraph() {
    const canvas: HTMLCanvasElement = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Avg'],
      datasets: [
        {
          label: 'Blue',
          data: [103, 116, 99, 120, 135, 101, 117, 86],
          borderColor: 'rgb(192,196,197)',
          pointBackgroundColor: 'rgb(15, 80, 185)',
          pointBorderColor: 'rgb(15, 80, 185)',
          pointRadius: 5,
          lineTension: 0,
          borderWidth: 1,
        },
        {
          label: 'Orange',
          data: [60, 97, 73, 65, 52, 59, 97, 56],
          borderColor: 'rgb(228,228,228)',
          pointBackgroundColor: 'rgb(255,96,0)',
          pointBorderColor: 'rgb(255,96,0)',
          pointRadius: 5,
          lineTension: 0,
          borderWidth: 1,
        }
      ]
    };

    new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'category',
            display: true,
            grid: {
              display: false,
            },
            border: {
              display: false,
            },
            ticks: {
              font: {
                size: 14, 
                family: 'CustomFont', 
              }
            }
          },
          y: {
            type: 'linear',
            display: true,
            grid: {
              display: true
            },
            border: {
              display: false,
            },
            ticks: {
              display: false,
              maxTicksLimit: 5,
              stepSize: 45
            },
            min: 0,
            max: 140
          }
        }
      }
    });
  }

}
