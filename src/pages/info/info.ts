import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
casa=[];
favo=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
    this.casa=this.navParams.get('casa');
    this.favo=this.navParams.get('favo');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }
  clickanadir(){
      this.favo.push(this.casa);
      this.storage.set('favo', JSON.stringify(this.favo));
     this.navCtrl.pop();
}
}
