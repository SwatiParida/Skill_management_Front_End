// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-spider-chart',
//   standalone: true,
//   imports: [],
//   templateUrl: './spider-chart.component.html',
//   styleUrl: './spider-chart.component.css'
// })
// export class SpiderChartComponent {

// }

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-spider-chart',
  templateUrl: './spider-chart.component.html',
  styleUrls: ['./spider-chart.component.css']
})
export class SpiderChartComponent implements OnChanges {
  @Input() selectedSkills: { skill: string, rating: number }[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedSkills'] && this.selectedSkills.length > 0) {
      this.createSpiderChart();
    }
  }

  createSpiderChart(): void {
    const skillLabels = this.selectedSkills.map(skill => skill.skill);
    const skillRatings = this.selectedSkills.map(skill => skill.rating);

    const ctx = document.getElementById('spider-chart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: skillLabels,
        datasets: [{
          label: 'Skill Level',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          pointBackgroundColor: 'rgba(255, 99, 132, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
          data: skillRatings
        }]
      },
      options: {
        scale: {
          ticks: {
            beginAtZero: true,
            max: 5 // Set maximum skill level
          }
        }
      }
    });
  }

}
