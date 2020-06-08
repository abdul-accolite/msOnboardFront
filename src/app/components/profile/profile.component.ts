import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { ProfileService } from 'src/app/providers/profileService/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;
  name:any;
  email:any;
  recentquestions=[];
  recentanswers=[];
  designation:string;
  permissions:string;
  constructor(public session: SessionStorageService,
    public profileservice: ProfileService) { 
      this.profileservice.getProfile(this.session.get("1").empId).subscribe((info) => {
        console.log(info)
         this.recentquestions=info['recentLogs'];
        // this.recentanswers=info['recentlyAnsweredQuestions'];
        this.profile=info['profilepic'];
        this.name=info['name'];
        console.log(this.name);
        this.email=info['email'];
        this.designation=info['designation'];
        this.permissions = info['permissions'];
        if(this.permissions.includes('delete'))
        {
          this.session.set("disable", false);
        }
        else{
          this.session.set("disable", true);
        }
        // for(let subcat of info['subcategory'] )
        // {
        //   console.log(subcat)
        //   this.subcategory+=subcat.subCatName;
        // }
        
      });
   
  }

  ngOnInit() {
  }

}
