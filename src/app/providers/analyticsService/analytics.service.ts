import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http:HttpClient) { }
  locationPie()
  {
   return  this.http.get("forum/analytics/location/pie");
  }
  skillsPie()
  {
    return this.http.get("forum/analytics/skills/pie");
  }
  managerPie()
  {
    return this.http.get("forum/analytics/manager/pie");
  }
  skillsBar()
  {
    return this.http.get("forum/analytics/skills/bar");
  }
}
