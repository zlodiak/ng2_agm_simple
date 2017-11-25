import { Injectable } from '@angular/core';
import { InitMarkers } from '../init-markers';

@Injectable()
export class MarkerService extends InitMarkers {

  constructor() {  
  	super();
  	console.log('init');
  	this.load();
  }

  getMarkers() {
  	let markers = JSON.parse(localStorage.getItem('markers'));
  	return markers;
  };

  addMarker(newMarker) {
  	console.log('serv addMarker');
  	let markers = JSON.parse(localStorage.getItem('markers'));
  	markers.push(newMarker);
  	localStorage.setItem('markers', JSON.stringify(markers));
  }

  updateMarker(marker, newLat, newLng) {
  	let markers = JSON.parse(localStorage.getItem('markers'));

  	for(let i = 0; i < markers.length; i++) {
  		if(marker.lat == markers[i].lat && marker.lng == markers[i].lng) {
  			markers[i].lat = newLat;
  			markers[i].lng = newLng;
  		}
  	}

  	localStorage.setItem('markers', JSON.stringify(markers));
  }

  removeMarker(marker) {
  	let markers = JSON.parse(localStorage.getItem('markers'));

  	for(let i = 0; i < markers.length; i++) {
  		if(marker.lat == markers[i].lat && marker.lng == markers[i].lng) {
  			markers.splice(i, 1);
  		}
  	}  	

  	localStorage.setItem('markers', JSON.stringify(markers));
  };

}
