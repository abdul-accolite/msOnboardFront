import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { AnalyticsService } from 'src/app/providers/analyticsService/analytics.service';
@Component({
  selector: 'app-skill-pie',
  templateUrl: './skill-pie.component.html',
  styleUrls: ['./skill-pie.component.css']
})
export class SkillPieComponent implements OnInit {
frontend:any;
backend:any;
fullstack:any;
  constructor(public analyticService:AnalyticsService) { }

  ngOnInit() {
    this.analyticService.skillsPie().subscribe((details)=>{
      this.frontend=details['frontend'];
      this.backend = details['backend'];
      this.fullstack = details['fullstack'];
    });
    setTimeout(() => this.getChart(),500);
  }
  getChart()
  {
    var myChart = new Chart("myChart", {
      type: 'pie',
      data: {
        labels: ['Backend', 'Frontend','fullstack'],
        datasets: [{
          label: '# of Votes',
          data: [this.backend, this.frontend,this.fullstack],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    var myChart = new Chart("myChart2", {
      type: 'bar',
      data: {
        labels: ['Backend', 'Frontend','fullstack'],
        datasets: [{
          label: '# of developers',
          data: [this.backend, this.frontend,this.fullstack],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
