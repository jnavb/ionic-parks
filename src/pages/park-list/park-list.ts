import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ParkData } from '../../providers/park-data';
/*
  Generated class for the ParkList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-park-list',
  templateUrl: 'park-list.html'
})
export class ParkListPage {
	parks: Array<Object> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  						public parkData: ParkData) {
  	parkData.getParks().then(result => {
  		this.parks = result;
  	})
  }

  goParkDetails(theParkData){
  	this.navCtrl.push("ParkDetailsPage", { parkData: theParkData });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParkListPage');
  }

}
