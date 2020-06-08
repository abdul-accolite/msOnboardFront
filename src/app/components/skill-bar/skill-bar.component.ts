import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { AnalyticsService } from 'src/app/providers/analyticsService/analytics.service';
@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.css']
})
export class SkillBarComponent implements OnInit {
java:any;
angular:any;
react:any;
js:any;
  constructor(public analyticService:AnalyticsService) { }

  ngOnInit() {
    this.analyticService.skillsBar().subscribe((details)=>{
      this.java=details['java'];
      this.angular = details['angular'];
      this.react = details['react'];
      this.js = details['js'];
    });
    setTimeout(() => this.getChart(),500);
  }
  getChart()
  {
    var myChart = new Chart("myChart", {
      type: 'pie',
      data: {
        labels: ['java', 'angular','react','js'],
        datasets: [{
          label: '# of skills',
          data: [this.java, this.angular,this.react,this.js],
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
        labels: ['java', 'angular','react','js'],
        datasets: [{
          label: '# of skills',
          data: [this.java, this.angular,this.react,this.js],
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
