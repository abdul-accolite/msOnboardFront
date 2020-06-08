import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient){ }

  addQuestion(name:string,dob:string,experience:number,address:string,skills:string,onboardingStartDate:string,startDate:string,eta:string,
    bgcCheck:string,onboardingStatus:string,location:string,developerType:string,softDeleted:boolean,updatedBy:string,updatedFields:string){
      return  this.http.post<String>('forum/onboard/add',{
        name:name,
        dob:dob,
        experience:experience,
        address:address,
        skills:skills,
        onboardingStartDate:onboardingStartDate,
        startDate:startDate,
        eta:eta,
        bgcCheckStatus:bgcCheck,
        onboardingStatus:onboardingStatus,
        location:location,
        developerType:developerType,
        softDeleted:softDeleted,
        updatedBy:updatedBy,
        updatedFields:updatedFields
      },
      )                                 
  }

}
