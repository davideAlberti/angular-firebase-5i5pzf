import { Component, OnInit } from '@angular/core';
import * as admin from 'firebase-admin';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';

  constructor() {}

  ngOnInit() { 
    admin.auth().getUserByEmail('albertidavide91@gmail.com')
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
}