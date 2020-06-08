import { Component, OnInit  } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { AnalyticsService } from 'src/app/providers/analyticsService/analytics.service';
import { HttpClient } from '@angular/common/http';  
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
bangalore:any;
mumbai:any;
  constructor(public analyticService:AnalyticsService) { }

  ngOnInit() {
    
    this.analyticService.locationPie().subscribe((details)=>{
      this.bangalore=details['bangalore'];
      this.mumbai = details['mumbai'];
    });
    setTimeout(() => this.getChart(),500);
    
  }
  
  getChart()
  {
    var myChart = new Chart("myChart", {
      type: 'pie',
      data: {
        labels: ['Bangalore', 'Mumbai'],
        datasets: [{
          label: '# of Votes',
          data: [this.bangalore, this.mumbai],
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
        labels: ['Bangalore', 'Mumbai'],
        datasets: [{
          label: '# of onboardees',
          data: [this.bangalore, this.mumbai],
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
