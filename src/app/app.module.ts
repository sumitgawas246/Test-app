import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './data.service';
import {AppComponent1} from './app1.component';
  import { from } from 'rxjs/internal/observable/from';


  const appRoutes: Routes = [
    {path:'' , redirectTo:'/Home' , pathMatch: 'full'},
    { path: 'Home', component: AppComponent },
    { path: 'About', component: AppComponent1 }
   
  ];

@NgModule({
  declarations: [
    AppComponent, AppComponent1
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent, AppComponent1]
})
export class AppModule { }
