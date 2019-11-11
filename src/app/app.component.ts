import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './database.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';

  constructor(private databaseService: DatabaseService) {}

  ngOnInit() {
    this.databaseService.get().then((res) => console.log(res)).catch((err) => console.log(err))
  }
}
