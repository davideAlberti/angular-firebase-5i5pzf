import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as admin from 'firebase-admin';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firebase: AngularFireDatabase) {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
      databaseURL: 'https://fir-prova-3e5da.firebaseio.com/'
    });
  }

  get() {
    return admin.auth().getUserByEmail('albertidavide91@gmail.com')
  }

}