import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {MetaProvider} from "../../providers/meta/meta";

/**
 * Generated class for the PublishMetaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-publish-meta',
  templateUrl: 'publish-meta.html',
})
export class PublishMetaPage {

  data = {
    keyword: '',
    price: 0,
  };

  constructor(public navCtrl: NavController,
              private metaService: MetaProvider,
              private toastCtl: ToastController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublishMetaPage');
  }

  publishMeta() {
    if (this.data.price < 0) {
      this.toastCtl.create({
        message: 'Price cannot be negative',
        duration: 2000,
        dismissOnPageChange: true
      }).present();
      return;
    }
    console.log('call service')
    this.metaService.create(this.data)
      .subscribe(res=>{
        console.log('res=',res);
      });
  }

}
