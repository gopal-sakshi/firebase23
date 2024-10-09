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

}
