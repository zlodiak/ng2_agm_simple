import { Component } from '@angular/core';

import { MarkerService } from './services/marker.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: string = 'My first AGM project';
  latMap: number = 42.8;
  lngMap: number = -71.1;

  markerName = '';
  markerLat = '';
  markerLng = '';
  markerDraggable = '';

  constructor(private _markerService: MarkerService) {
  	this.markers = this._markerService.getMarkers();
  }

  markers: marker[] = [];

  mapClicked($event: any) {
  	console.log('map clicked');

  	let newMarker = {
  		name: 'untitled',
  		lat: $event.coords.lat,
  		lng: $event.coords.lng,
  		draggable: false
  	}

  	this.markers.push(newMarker);

  	console.log(newMarker);
  	this._markerService.addMarker(newMarker);
  };

  clickMarker(marker: marker, index: number) {
  	console.log('clickMarker', marker.name, index);
  }

  markerDragEnd(marker: marker, $event: any) {
  	console.log('markerDragEnd');

  	let updMarker = {
  		name: marker.name,
  		lat: marker.lat,
  		lng: marker.lng,
  		draggable: false
  	};

  	let newLat = $event.coords.lat;
  	let newLng = $event.coords.lng;

  	this._markerService.updateMarker(updMarker, newLat, newLng);
  };

  addMarker() {
  	console.log('addMarker');

  	let isDraggable;

  	if(this.markerDraggable == 'yes') {
  		isDraggable = true;
  	} else {
  		isDraggable = false;
  	}

  	let newMarker = {
  		name: this.markerName,
  		lat: +this.markerLat,
  		lng: +this.markerLng,
  		draggable: isDraggable
  	};

  	this.markers.push(newMarker);
  	this._markerService.addMarker(newMarker);
  };

  removeMarker(marker) {
  	console.log('removeMarker');

  	for(let i = 0; i < this.markers.length; i++) {
  		if(marker.lat == this.markers[i].lat && marker.lng == this.markers[i].lng) {
  			this.markers.splice(i, 1);
  		}
  	}  	

  	this._markerService.removeMarker(marker);
  };

}


interface marker {
	name?: string;
	lat: number;
	lng: number;
	draggable: boolean;

}