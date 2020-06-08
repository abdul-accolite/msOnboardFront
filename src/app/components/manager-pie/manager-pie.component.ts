import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { AnalyticsService } from 'src/app/providers/analyticsService/analytics.service';
@Component({
  selector: 'app-manager-pie',
  templateUrl: './manager-pie.component.html',
  styleUrls: ['./manager-pie.component.css']
})
export class ManagerPieComponent implements OnInit {
manager1:any;
manager2:any;
manager3:any;
percentage1:any;
percentage2:any;
percentage3:any;
  constructor(public analyticService:AnalyticsService) { }

  ngOnInit() {
    this.analyticService.managerPie().subscribe((details)=>{
      this.percentage2 = details['percentage2'];
      this.percentage3 = details['percentage3'];
      this.percentage1 = details['percentage1'];
      this.manager1=details['manager1'];
     
      this.manager2=details['manager2'];
      
      this.manager3=details['manager3'];
     
    });
    setTimeout(() => this.getChart(),500);
  }
  getChart()
  {
    var myChart = new Chart("myChart", {
      type: 'pie',
      data: {
        labels: [this.manager1, this.manager2,this.manager3],
        datasets: [{
          label: '# of Votes',
          data: [this.percentage1, this.percentage2,this.percentage3],
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
        labels: [this.manager1, this.manager2,this.manager3],
        datasets: [{
          label: '# of onboardees',
          data: [this.percentage1, this.percentage2,this.percentage3],
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
