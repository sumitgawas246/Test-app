import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Json to HTML';

  constructor (private httpService: HttpClient, private dataService:DataService){ }
  arrBirds: string[];
  err: string[];
  someProperty:string = '';
  ngOnInit(){
    this.httpService.get('./assets/test.json').subscribe(
      data => {
        this.arrBirds = data as string []; //Fill the data with array
        //console.log(this.arrBirds[1]);

      },
      (HttpErrorResponse) => {
        console.log();  
      }
      
    );
    console.log(this.dataService.cars);
    
    this.someProperty = this.dataService.myData();
  }

  

}
