import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  

  
  students=[{Username:'youssef',Email:'youssefalaa858@yahoo.com',Password:"sos"}];
  
  
  onClick(username:HTMLInputElement,Email:HTMLInputElement,Password:HTMLInputElement){
    const tem={Username:username.value,Email:Email.value,Password:Password.value}; 
    this.students.push(tem);
  }


  constructor() {
  }

}