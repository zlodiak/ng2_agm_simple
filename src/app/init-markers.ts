export class InitMarkers {
	load() {
		if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined) {
			console.log('no markers');

			let markers = [{
			    "name": "untitled",
			    "lat": 42.591915029792396,
			    "lng": -71.3232421875,
			    "draggable": true
			}, {
			    "name": "untitled",
			    "lat": 42.72522503339923,
			    "lng": -69.98291015625,
			    "draggable": true
			}, {
			    "name": "untitled",
			    "lat": 42.954814366303744,
			    "lng": -70.2960205078125,
			    "draggable": true
			}, {
			    "name": "untitled",
			    "lat": 43.155505950577464,
			    "lng": -71.3177490234375,
			    "draggable": true
			}, {
			    "name": "untitled",
			    "lat": 42.82602713002677,
			    "lng": -70.13671875,
			    "draggable": true
			}, {
			    "name": "untitled",
			    "lat": 42.64042445678218,
			    "lng": -70.191650390625,
			    "draggable": true
			}];

			localStorage.setItem('markers', JSON.stringify(markers));
		} else {
			console.log('loading markers');
		}
	}
}
