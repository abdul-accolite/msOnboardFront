import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http:HttpClient) { }
  viewQuestion(Id)
  {
    console.log("getquestion answer called");
    return this.http.get("forum/onboard/getAll/"+false);
  }
  deleteOnboardee(onboardeeId:number,updatedBy:string,demandId:number)
  {
    
    //console.log("getquestion answer called");
    return this.http.post("forum/onboard/delete",{
      onboardeeId:onboardeeId,
      updatedFields:"softDelete set to true, this onboardee is no more belonging to MS",
      dId:demandId,
      updatedBy:updatedBy
    });
  }
  updateOnboardee(onboardeeId:number,name:string,dob:string,experience:number,address:string,skills:string,onboardingStartDate:string,eta:string,
    bgcCheck:string,onboardingStatus:string,location:string,developerType:string,softDeleted:boolean,updatedBy:string,updatedFields:string)
  {
    
    //console.log("getquestion answer called");
    return this.http.post("forum/onboard/update",{
      onboardeeId:onboardeeId,
      name:name,
      dob:dob,
      experience:experience,
      address:address,
      skills:skills,
      onboardingStartDate:onboardingStartDate,
      startDate:onboardingStartDate,
      eta:eta,
      bgcCheckStatus:bgcCheck,
      onboardingStatus:onboardingStatus,
      location:location,
      developerType:developerType,
      softDeleted:softDeleted,
      updatedBy:updatedBy,
      updatedFields:updatedFields
    });
  }
  
}
