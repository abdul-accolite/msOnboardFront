import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/providers/homeService/home.service';
import {  SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  questions=[]
  onboardeeId:number;
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
  disable:string="enabled";

  constructor(public session: SessionStorageService,
    private router: Router,
     public homeservice:HomeService) { 
      this.homeservice.viewQuestion(this.session.get("1").empId).subscribe((details) => {
        this.questions.push(details);
        console.log("question answer",this.questions[0])
        
      });

      if(!this.session.get("disable"))
      {
        this.disable="disabled";
      }
     }

  ngOnInit() {
    if(this.session.get("2"))
    {
      this.session.set("2",false);
      window.location.reload();
    }
  }
  viewonboardee(id:number)
  {
    this.router.navigate(['/onboardee/'+id])
  }
  viewquestion(qId:number)
  {
    this.router.navigate(['/question/'+qId])
  }
  fillIt(question)
  {
    this.dob = question.dob;
    this.experience=question.experience;
    this.dId = question.dId;
    this.address=question.address;
    this.skills=question.skills;
    this.onboardingStartDate=question.onboardingStartDate;
    this.eta=question.eta;
    this.bgcCheckStatus=question.bgcCheckStatus;
    this.onboardingStatus=question.onboardingStatus;
    this.location=question.location;
    this.mshmid=question.mshmid;
    this.softDeleted=question.softDeleted;
    this.developerType=question.developerType;
    this.name=question.name;
    this.onboardeeId=question.onboardeeId;
    

  }
  deleteOnboardee(onboardeeId:number,dId:number)
  {
    let updatedBy:string = this.session.get("1").name;
    this.homeservice.deleteOnboardee(onboardeeId,updatedBy,dId).subscribe((res)=>{
      window.location.reload();
      });
  }
  updateOnboardee()
  {
    let updatedBy:string = this.session.get("1").name;
    this.homeservice.updateOnboardee(this.onboardeeId,this.name,this.dob,this.experience,this.address,this.skills,
      this.onboardingStartDate,this.eta,this.bgcCheckStatus,this.onboardingStatus,this.location,this.developerType,this.softDeleted,updatedBy,this.updatedFields
      ).subscribe((res)=>{
      window.location.reload();
      });
  }
}
