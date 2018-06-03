import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  responses = [
    {
      id: '001',
      keywords: 'Traffic Volume',
      size: '40MB'
    }
    , {
      id: '002',
      keywords: 'House Price',
      size: '60MB'
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  showResponseAccept(){

  }

  showResponseUpdate(){

  }

}
