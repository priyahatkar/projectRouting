import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComputerComponent } from './shared/components/computer/computer.component';
import { SingleCompComponent } from './shared/components/computer/single-comp/single-comp.component';
import { DashBoardComponent } from './shared/components/dash-board/dash-board.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LaptopComponent } from './shared/components/laptop/laptop.component';
import { SingleLapComponent } from './shared/components/laptop/single-lap/single-lap.component';
import { MobileComponent } from './shared/components/mobile/mobile.component';
import { SingleMoComponent } from './shared/components/mobile/single-mo/single-mo.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { SingleTabComponent } from './shared/components/tab/single-tab/single-tab.component';
import { TabComponent } from './shared/components/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashBoardComponent,
    ComputerComponent,
    MobileComponent,
    TabComponent,
    LaptopComponent,
    SingleMoComponent,
    PageNotFoundComponent,
    SingleCompComponent,
    SingleLapComponent,
    SingleTabComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
