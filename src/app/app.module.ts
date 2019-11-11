import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { DatabaseService } from './database.service';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAjyJOlrZqqQcCFZUeuTnR4GOEuBRTgJ3k",
      authDomain: "fir-prova-3e5da.firebaseapp.com",
      databaseURL: "https://fir-prova-3e5da.firebaseio.com",
      projectId: "fir-prova-3e5da",
      storageBucket: "fir-prova-3e5da.appspot.com",
      messagingSenderId: "993087833517",
      appId: "1:993087833517:web:dd6c345936bf3cb5bf0d24"
    }) 
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [ DatabaseService ]
})
export class AppModule { }
