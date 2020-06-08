import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/indexpage/index/index.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { SessionService } from './providers/sessionService/session.service'


import {NotfoundComponent} from './components/notfound/notfound.component'
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { ProfileComponent } from './components/profile/profile.component';

import { AnalyticsComponent } from './components/analytics/analytics.component';
import { SkillBarComponent } from './components/skill-bar/skill-bar.component';
import { SkillPieComponent } from './components/skill-pie/skill-pie.component';
import { ManagerPieComponent } from './components/manager-pie/manager-pie.component';
import { OnboardeeComponent } from './components/onboardee/onboardee.component';
const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'onboardee/:onboardeeId', component: OnboardeeComponent },
  { path: 'skillbar', component: SkillBarComponent },
  { path: 'skillpie', component: SkillPieComponent },
  { path: 'managerpie', component: ManagerPieComponent },
  {path:'analytics', component:AnalyticsComponent},
  { path: 'home', component: HomeComponent},
  { path: 'chat', component: ChatbotComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '**', component: NotfoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [
    SessionService
  ]
})
export class AppRoutingModule { }
