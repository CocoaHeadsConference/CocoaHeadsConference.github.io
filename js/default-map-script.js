
function gMap () {
	if ($('.google-map').length) {
		$('.google-map').each(function () {
			// getting options from html 
			var Self = $(this);
			var mapName = Self.attr('id');
			var mapLat = Self.data('map-lat');
			var mapLng = Self.data('map-lng');
			var iconPath = Self.data('icon-path');
			var mapZoom = Self.data('map-zoom');
			var mapTitle = Self.data('map-title');
			var styles = [
			    {
			        "featureType": "administrative",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "lightness": 33
			            }
			        ]
			    },
			    {
			        "featureType": "administrative",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "saturation": "-100"
			            }
			        ]
			    },
			    {
			        "featureType": "administrative",
			        "elementType": "labels.text",
			        "stylers": [
			            {
			                "gamma": "0.75"
			            }
			        ]
			    },
			    {
			        "featureType": "administrative.neighborhood",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "lightness": "-37"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#f9f9f9"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape.man_made",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "saturation": "-100"
			            },
			            {
			                "lightness": "40"
			            },
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape.natural",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "saturation": "-100"
			            },
			            {
			                "lightness": "-37"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape.natural",
			        "elementType": "labels.text.stroke",
			        "stylers": [
			            {
			                "saturation": "-100"
			            },
			            {
			                "lightness": "100"
			            },
			            {
			                "weight": "2"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape.natural",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "saturation": "-100"
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "saturation": "-100"
			            },
			            {
			                "lightness": "80"
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "saturation": "-100"
			            },
			            {
			                "lightness": "0"
			            }
			        ]
			    },
			    {
			        "featureType": "poi.attraction",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "lightness": "-4"
			            },
			            {
			                "saturation": "-100"
			            }
			        ]
			    },
			    {
			        "featureType": "poi.park",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#c5dac6"
			            },
			            {
			                "visibility": "on"
			            },
			            {
			                "saturation": "-95"
			            },
			            {
			                "lightness": "62"
			            }
			        ]
			    },
			    {
			        "featureType": "poi.park",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "lightness": 20
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "all",
			        "stylers": [
			            {
			                "lightness": 20
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "saturation": "-100"
			            },
			            {
			                "gamma": "1.00"
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "labels.text",
			        "stylers": [
			            {
			                "gamma": "0.50"
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "saturation": "-100"
			            },
			            {
			                "gamma": "0.50"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#c5c6c6"
			            },
			            {
			                "saturation": "-100"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "lightness": "-13"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "lightness": "0"
			            },
			            {
			                "gamma": "1.09"
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#e4d7c6"
			            },
			            {
			                "saturation": "-100"
			            },
			            {
			                "lightness": "47"
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "lightness": "-12"
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "saturation": "-100"
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#fbfaf7"
			            },
			            {
			                "lightness": "77"
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "lightness": "-5"
			            },
			            {
			                "saturation": "-100"
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "saturation": "-100"
			            },
			            {
			                "lightness": "-15"
			            }
			        ]
			    },
			    {
			        "featureType": "transit.station.airport",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "lightness": "47"
			            },
			            {
			                "saturation": "-100"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "color": "#ff9a00"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "saturation": "53"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "lightness": "-42"
			            },
			            {
			                "saturation": "17"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "labels.text.stroke",
			        "stylers": [
			            {
			                "lightness": "61"
			            }
			        ]
			    }
			];

			// if zoom not defined the zoom value will be 15;
			if (!mapZoom) {
				var mapZoom = 15;
			};
			// init map
			var map;
			map = new GMaps({
			    div: '#'+mapName,
			    scrollwheel: false,
			    lat: mapLat,
			    lng: mapLng,
			    styles: styles,
			    zoom: mapZoom
			});
			// if icon path setted then show marker
			if(iconPath) {
				map.addMarker({
			    	icon: iconPath,
			    	lat: mapLat,
			      	lng: mapLng,
			      	title: 'Main Head office',
			      	infoWindow: {
						content: '<h3>Head Office</h3> <span>New York, United Kingdom</span> <p>Call us: +1 800 222 930 120</p>'
					}
				});
			}
		});  
	};
}


// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
		// add your functions
		gMap();
	})(jQuery);
});