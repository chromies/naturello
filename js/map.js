function myMap() {
	var posCenter = new google.maps.LatLng(46.4707747, 30.7480368);
	var mapProp = {
		center: posCenter,
		zoom: 16
	};
	var markerImage = 'img/marker.png';
	var map = new google.maps.Map(document.getElementById("map"), mapProp);
	var marker = new google.maps.Marker({ position: posCenter, map: map, icon: markerImage });
}