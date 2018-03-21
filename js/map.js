
function initMap() {
        // Styles a map in night mode.
        var myLatLng = {lat: 59.920624, lng: 30.356681};

        var map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
		  mapTypeControl: false,
		  streetViewControl: false,
		  rotateControl: false,
		  fullscreenControl: false,
          zoom: 17,
          styles: [
          {
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#212121"
            }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
            {
              "visibility": "off"
            }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#757575"
            }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
            {
              "color": "#212121"
            }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#757575"
            }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#9e9e9e"
            }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "stylers": [
            {
              "visibility": "off"
            }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [
            {
              "visibility": "off"
            }
            ]
          },
          {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#bdbdbd"
            }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
            {
              "visibility": "off"
            }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#757575"
            }
            ]
          },
          {
            "featureType": "poi.business",
            "stylers": [
            {
              "visibility": "off"
            }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#181818"
            }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#616161"
            }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
            {
              "color": "#1b1b1b"
            }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
            {
              "color": "#cc3a3a"
            }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
            {
              "visibility": "off"
            }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#8a8a8a"
            }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#cc3a3a"
            }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#cc3a3a"
            }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#cc3a3a"
            }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [
            {
              "visibility": "off"
            }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#616161"
            }
            ]
          },
          {
            "featureType": "transit",
            "stylers": [
            {
              "visibility": "off"
            }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#757575"
            }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#000000"
            }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#3d3d3d"
            }
            ]
          }
          ]
        });
var image = '../img/mapin.png';
var marker = new google.maps.Marker({
  position: myLatLng,
  map: map,
  icon: image,
  title: 'Санкт-Петербург, Транспортный переулок, 1 ТК Платформа, 4 этаж, офис 404'
});
}
