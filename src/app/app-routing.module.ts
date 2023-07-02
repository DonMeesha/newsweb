import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { EntertainmentnewsComponent } from './entertainmentnews/entertainmentnews.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';
import { HealthnewsComponent } from './healthnews/healthnews.component';

const routes: Routes = [

  {path:'', component: TopheadingComponent}, //home
  {path:'tech', component: TechnewsComponent}, //technology
  {path:'business', component: BusinessnewsComponent}, //business
  {path:'entertainment', component: EntertainmentnewsComponent}, //entertainment
  {path: 'sports', component: SportsnewsComponent}, //sports
  {path: 'health', component: HealthnewsComponent} //health



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
