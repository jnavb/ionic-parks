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
  searchQuery: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
  						public parkData: ParkData) {
  	parkData.getParks().then(result => {
  		this.parks = result;
  	})
  }

  goParkDetails(theParkData){
  	this.navCtrl.push("ParkDetailsPage", { parkData: theParkData });
  }

  getParksSearch(event) {
    // Reset items back to all of the items
    this.parkData.getParks().then(result => {
      this.parks = result
    });

    // set queryString to the value of the searchbar
    let queryString = event.target.value;
    
    if (queryString == undefined || queryString.trim() == '') {
      return;
    }

    this.parkData.getFilteredParks(queryString).then(result => {
      this.parks = result;
    })
  }

  resetList(event) {
    //Reset items back to all of the items
    this.parkData.getParks().then(result => {
      this.parks = result;
    })
  }

  customHeaderFn(record, recordIndex, records) {
    if ( recordIndex > 0 ) {
      if ( record.name.charAt(0) !== records[recordIndex-1].name.charAt(0)) {
        return record.name.charAt(0);
      } else {
        return null;
      }
    } else {
      return record.name.charAt(0);
    }
  }
}
