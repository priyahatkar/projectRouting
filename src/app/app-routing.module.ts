import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputerComponent } from './shared/components/computer/computer.component';
import { SingleCompComponent } from './shared/components/computer/single-comp/single-comp.component';
import { DashBoardComponent } from './shared/components/dash-board/dash-board.component';
import { LaptopComponent } from './shared/components/laptop/laptop.component';
import { SingleLapComponent } from './shared/components/laptop/single-lap/single-lap.component';
import { MobileComponent } from './shared/components/mobile/mobile.component';
import { SingleMoComponent } from './shared/components/mobile/single-mo/single-mo.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { SingleTabComponent } from './shared/components/tab/single-tab/single-tab.component';
import { TabComponent } from './shared/components/tab/tab.component';

const routes: Routes = [
  {
    path : '', component : DashBoardComponent
  },
  {
    path : 'home', component : DashBoardComponent
  },
  {
    path : 'computer', component : ComputerComponent
  },
  {
    path : 'computer/:cId', component : SingleCompComponent
  },
  {
    path : 'laptop', component : LaptopComponent
  },
  {
    path : 'laptop/:lapId', component : SingleLapComponent
  },
  {
    path : 'tab', component : TabComponent
  },
  {
    path : 'tab/:tabId', component : SingleTabComponent
  },
  {
    path : 'mobile', component : MobileComponent
  },
  {
    path : 'mobile/:moId', component : SingleMoComponent
  },
  {
    path : 'pageNotFound', component : PageNotFoundComponent
  },
  {
    path : '**',
    redirectTo : 'pageNotFound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
