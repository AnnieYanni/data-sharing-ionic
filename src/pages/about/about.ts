import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  requests = [
    {
      id: '001',
      keywords: 'Temperature',
      bonus: 50
    }
    , {
      id: '002',
      keywords: 'Weather',
      bonus: 50
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  showRequestResponse(){

  }

  showRequestUpdate(){

  }

}
