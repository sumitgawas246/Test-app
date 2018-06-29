import { Component } from '@angular/core';
import {DataService} from './data.service';


@Component({
    selector: 'app-root',
    templateUrl: './app1.component.html'
   
  })
  export class AppComponent1 {
    constructor(private dataService:DataService) {
    }
    someProperty:string = '';
    
      ngOnInit() {
        console.log(this.dataService.cars);
    
        this.someProperty = this.dataService.myData();
      }


  }