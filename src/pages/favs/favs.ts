import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the FavsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favs',
  templateUrl: 'favs.html',
})
export class FavsPage {
favo={};
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
    this.favo=this.navParams.get('favo');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavsPage');
  }

}
