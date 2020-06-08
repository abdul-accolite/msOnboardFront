import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SessionStorageService } from 'angular-web-storage';
import { SearchService } from 'src/app/providers/searchService/search.service';
import { QuestionService } from '../../providers/questionService/question.service'
import { ProfileService } from 'src/app/providers/profileService/profile.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public data: any = []
  public display = "none";
  categories = ["HR", "Technical Stack"]
  Technical = ['Java', 'Python', 'Spring-Boot', 'Angular',
    'React-Js', 'Sql', 'Others']
  Hr = ['Recruitment', 'Training', 'Compensation', 'Perks', 'Others']
  danger = "none"
  subcategories = []

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
  updatedFields:string="All";

  subcategory: string = "";
  category: string = "";
  questions: string = "";
  description: string = "";
  categorydisplay = "none";
  subcatId = 0;


  private matchquestion: any = []
  constructor(public session: SessionStorageService,
    public profileservice: ProfileService,
    private router: Router,
    public searchservice: SearchService,
    public questionservice: QuestionService) {
    this.data[0] = this.session.get("1");


  }

  ngOnInit() {

  }
  question() {
    this.router.navigate(['/askquestion'])

  }
  questionclick(qId: number) {
    this.router.navigate(['/question/' + qId]).then(() => { window.location.reload(); })

  }

  searchquestion(qId: number) {

  }

  onSearchChange(searchValue: string): void {

    if (searchValue.length == 0) {
      this.display = "none";
    }
    else {
      this.searchservice.generateKeywords(searchValue).subscribe((search) => {
        this.matchquestion = search;
        console.log(this.matchquestion);

      });
      this.display = "block";
    }
    console.log(searchValue);
  }

  logout() {
    this.session.remove("1");
    this.data[0] = this.session.get("1");
    this.session.set("3", true);
    console.log(this.data)
    this.router.navigate(['/'])
  }
  homeredirect() {
    this.router.navigate(['/home'])

  }
  OncatChange(item: string) {
    console.log(item)
    if (item === "HR") {
      this.subcategories = this.Hr
      this.subcategory = this.Hr[0];
    }
    else {
      this.subcategories = this.Technical
      this.subcategory = this.Technical[0];
    }
  }
  OnsubcatChange(item: string) {
    this.subcategory = item
  }
  postquestion() {
    if (this.name === "" || this.location === "" || this.skills === "" || this.eta === "") {
      this.danger = "block";
    }
    else {
      this.danger = "none";
      this.updatedBy=this.session.get("1").name;
      this.questionservice.addQuestion(this.name, this.dob, this.experience, this.address, this.skills, this.onboardingStartDate,this.onboardingStartDate, this.eta, this.bgcCheckStatus, this.onboardingStatus, this.location, this.developerType, this.softDeleted,this.updatedBy,this.updatedFields).subscribe((res) => {
        this.router.navigate(['/home']).then(() => {
          this.name = "";
          this.dob = "";
          this.dId = 0;
          this.experience = 0;
          this.address = "";
          this.skills = "";
          this.onboardingStartDate = "";
          this.eta = "";
          this.bgcCheckStatus = "";
          this.onboardingStatus = "";
          this.location = "";
          this.mshmid = 0;
          this.developerType = "";
          this.softDeleted = false;
          window.location.reload();
        })

      });
    }
  }

  categoryselect(id: number) {
    console.log(id);
    this.categorydisplay = "none";
    this.router.navigate(["viewcategory/" + id]).then(() => {
      window.location.reload();
    })
  }
  viewprofile() {
    this.router.navigate(["profile"]);
  }
  viewanalytics() {
    this.router.navigate(["analytics"]);
  }
  viewskillpie() {
    this.router.navigate(["skillpie"]);
  }
  viewskillbar() {
    this.router.navigate(["skillbar"]);
  }
  viewmanagerpie() {
    this.router.navigate(["managerpie"]);
  }
  opendropdown() {
    if (this.categorydisplay === "none") {
      this.categorydisplay = "block";

    }
    else {
      this.categorydisplay = "none"
    }

  }
}
