import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PublishMetaPage} from "../publish-meta/publish-meta";
import {RequestDataPage} from "../request-data/request-data";
import {CreateAccountPage} from "../create-account/create-account";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  metas = [
    {
      id: '1',
      keywords: 'Student Score',
      price: 100
    }
    , {
      id: '2',
      keywords: 'Staff Salary',
      price: 200
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  showPublish() {
    this.navCtrl.push(PublishMetaPage)
  }

  showRequest() {
    this.navCtrl.push(RequestDataPage)
  }

  showCreateAccount(){
    this.navCtrl.push(CreateAccountPage)
  }
}
