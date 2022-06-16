import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';

import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FireMessage23Service {

  currentMessage = new BehaviorSubject(null);

  constructor(private angularFireMessaging: AngularFireMessaging) {

    this.angularFireMessaging.requestPermission.pipe(
      map((res) => {
        console.log(res);
        return res;
      })
    ).subscribe(res => {
      console.log('inside hello');
      console.log(res);
    });

    this.angularFireMessaging.tokenChanges.subscribe(res => {
      console.log(res);
    })
  }

  getName() {
    return 'Benz';
  }
}
