import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = '';
  users = null;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getRequest('/users').subscribe(
      (response) => {
        this.users = response;
      },
      (error) => { 
        this.title = "Error occurred while fetching the data!";
      }
    );
  }
}
