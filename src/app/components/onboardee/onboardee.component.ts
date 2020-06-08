import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboardee',
  templateUrl: './onboardee.component.html',
  styleUrls: ['./onboardee.component.css']
})
export class OnboardeeComponent implements OnInit {

  
  dob: string = "";
  experience: number;
  dId: number;
  address: string = "";
  skills: string = "";
  onboardingStartDate: string = "";
  eta: string = "";
  bgcCheckStatus: string = "";
  onboardingStatus: string = "";
  location: string = "";
  mshmid: number;
  softDeleted: boolean = false;
  developerType: string = "";
  name: string = "";
  updatedBy:string="";
  updatedFields:string="";
  constructor() { }

  ngOnInit() {
  }

}
