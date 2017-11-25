import { Component } from '@angular/core';

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

  markers: marker[] = [
  	{
  		name: 'company one',
  		lat: 42.8,
  		lng: -71.1,
  		draggable: true
  	},
  	{
  		name: 'company 2',
  		lat: 42.1,
  		lng: -72.1,
  		draggable: true
  	},
  	{
  		name: 'company 3',
  		lat: 42.8,
  		lng: -71.6,
  		draggable: true
  	}  	  	
  ]

  mapClicked($event: any) {
  	console.log('map clicked');

  	let newMarker = {
  		name: 'untitled',
  		lat: $event.coords.lat,
  		lng: $event.coords.lng,
  		draggable: false
  	}

  	this.markers.push(newMarker);
  };

  clickMarker(marker: marker, index: number) {
  	console.log('clickMarker', marker.name, index);
  }

  markerDragEnd(marker: marker, $event: any) {
  	console.log('markerDragEnd', marker, $event);

  	let updMarker = {
  		name: marker.name,
  		lat: marker.lat,
  		lng: marker.lng,
  		draggable: false
  	};

  	let newLat = $event.coords.lat;
  	let newLng = $event.coords.lng;
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

  	console.log(this.markers);
  };

}


interface marker {
	name?: string;
	lat: number;
	lng: number;
	draggable: boolean;

}