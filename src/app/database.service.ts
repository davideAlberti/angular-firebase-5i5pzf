import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import * as admin from "firebase-admin";

@Injectable({
  providedIn: "root"
})
export class DatabaseService {
  constructor(private firebase: AngularFireDatabase) {
  }

  get() {
    admin.auth().getUser(uid)
      .then((userRecord) => {
        console.log("Successfully fetched user data:", userRecord.toJSON());
      })
      .catch((error) => {
        console.log("Error fetching user data:", error);
      });
  }
}
