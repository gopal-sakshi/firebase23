import { Component, OnInit } from '@angular/core';
import { FireMessage23Service } from './fire-message23.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  constructor(private fireMessage23:FireMessage23Service) {}

  title = 'firebase23';

  ngOnInit() {
    var name23 = this.fireMessage23.getName();
    console.log(name23);
    // this.fireMessage23.listen();ss
  }

  /**
   *  HOW TO USE
   * 
   * simply run the angular application -----> ng serve --port 4343
   * ensure notifications are allowed in your browser
   * then check for console.logs ----> you'll see a token printed 
   *    from this line ------------------> fire-message23.service.ts:27 
   * 
   * copy this token... open postman... backEndQueries... misc... sendNotification
   *  edit the body object with this token
   *  just for timepass ---> copy paste Authorization headers too (bcoz, it only worked after I re-entered the same authorization token)
   *  you can see Authorization in this link
   * 
   * https://console.firebase.google.com/u/2/project/gopal61288-01/settings/cloudmessaging/web:ZjdjNTIwN2UtNTc2Yi00NzdmLWE5M2QtZDE4Y2YzNDAwZmMz
   * 
   * 
   * it seems only for push notifications of fcm, we need these
   * - firebase-messaging-sw.js
   * - manifest.json
   * - add these in angualr.json assets array
   * 
   * But if you want to use firebase as database (not push notification)
   * - then, it seems, we do not need these...
   */

}
