import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {RequestProvider} from "../../providers/request/request";

/**
 * Generated class for the RequestDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request-data',
  templateUrl: 'request-data.html',
})
export class RequestDataPage {

  data = {
    keyword: 'keyword',
    price: 10,
  };

  constructor(public navCtrl: NavController,
              private requestService: RequestProvider,
              private toastCtl: ToastController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestDataPage');
  }

  requestData() {
    if (this.data.price < 0) {
      this.toastCtl.create({
        message: 'Bonus cannot be negative',
        duration: 2000,
        dismissOnPageChange: true
      }).present();
      return;
    }
    console.log('call service')
    this.requestService.create(this.data)
      .subscribe(res=>{
        console.log('res=',res);
      });
  }

}
