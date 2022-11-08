import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FireMessage23Service {

  currentMessage = new BehaviorSubject(null);

  constructor(private angularFireMessaging: AngularFireMessaging) {

    // ==================> ASK PERMISSION FROM BROWSER ----> to show notifications
    // request permission for browser notifications...
    this.angularFireMessaging.requestPermission.pipe(
      map((res) => {
        console.log(res);
        return res;
      })
    ).subscribe(res => {
      console.log('inside hello');
      console.log(res);
    });

    // ==================> PRINT token to console ---> whenever it changes
    // subscribing when token changes...
    this.angularFireMessaging.tokenChanges.subscribe(res => {
      console.log(res);
    });

    // ==================> subscribe to notifications
    this.angularFireMessaging.messages.pipe().subscribe(res => {
      console.log(res);
    });  
  }

  getName() {
    return 'Benz';
  }
}
