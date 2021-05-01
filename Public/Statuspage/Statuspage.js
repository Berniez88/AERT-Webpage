// CODE FOR THE GLM SUBCHECKBOXES
var checkboxes = document.querySelectorAll('input.subOption'),
    checkall = document.getElementById('option3');

for(var i=0; i<checkboxes.length; i++) {
  checkboxes[i].onclick = function() {
    var checkedCount = document.querySelectorAll('input.subOption:checked').length;

    checkall.checked = checkedCount > 0;
    checkall.indeterminate = checkedCount > 0 && checkedCount < checkboxes.length;
  }
}

checkall.onclick = function() {
  for(var i=0; i<checkboxes.length; i++) {
    checkboxes[i].checked = this.checked;
  }
}

// ADDITIONAL MAP FEATURES


// function initMap(){
//   var options ={
//     zoom:4,
//     center: {lat:37.0902, lng:-95.7129},
//     mapTypeControl: false,
//     mapTypeControlOptions: {
//       style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
//       position: google.maps.ControlPosition.TOP_CENTER,
//     },
//     zoomControl: true,
//     scaleControl: false,
//     streetViewControl: false,
//     streetViewControlOptions: {
//       position: google.maps.ControlPosition.LEFT_TOP,
//     },
//     fullscreenControl: true,
//     fullscreenControlOptions: {
//       position: google.maps.ControlPosition.RIGHT_BOTTOM,
//     },
//     styles: [
//               {
//                 "elementType": "geometry",
//                 "stylers": [
//                   {
//                     "color": "#1d2c4d"
//                   }
//                 ]
//               },
//               {
//                 "elementType": "labels.text.fill",
//                 "stylers": [
//                   {
//                     "color": "#8ec3b9"
//                   }
//                 ]
//               },
//               {
//                 "elementType": "labels.text.stroke",
//                 "stylers": [
//                   {
//                     "color": "#1a3646"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "administrative",
//                 "elementType": "geometry",
//                 "stylers": [
//                   {
//                     "visibility": "off"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "administrative.country",
//                 "elementType": "geometry.stroke",
//                 "stylers": [
//                   {
//                     "color": "#4b6878"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "administrative.land_parcel",
//                 "elementType": "labels.text.fill",
//                 "stylers": [
//                   {
//                     "color": "#64779e"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "administrative.province",
//                 "elementType": "geometry.stroke",
//                 "stylers": [
//                   {
//                     "color": "#4b6878"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "landscape.man_made",
//                 "elementType": "geometry.stroke",
//                 "stylers": [
//                   {
//                     "color": "#334e87"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "landscape.natural",
//                 "elementType": "geometry",
//                 "stylers": [
//                   {
//                     "color": "#023e58"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "poi",
//                 "stylers": [
//                   {
//                     "visibility": "off"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "poi",
//                 "elementType": "geometry",
//                 "stylers": [
//                   {
//                     "color": "#283d6a"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "poi",
//                 "elementType": "labels.text.fill",
//                 "stylers": [
//                   {
//                     "color": "#6f9ba5"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "poi",
//                 "elementType": "labels.text.stroke",
//                 "stylers": [
//                   {
//                     "color": "#1d2c4d"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "poi.park",
//                 "elementType": "geometry.fill",
//                 "stylers": [
//                   {
//                     "color": "#023e58"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "poi.park",
//                 "elementType": "labels.text.fill",
//                 "stylers": [
//                   {
//                     "color": "#3C7680"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "road",
//                 "elementType": "geometry",
//                 "stylers": [
//                   {
//                     "color": "#304a7d"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "road",
//                 "elementType": "labels.icon",
//                 "stylers": [
//                   {
//                     "visibility": "off"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "road",
//                 "elementType": "labels.text.fill",
//                 "stylers": [
//                   {
//                     "color": "#98a5be"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "road",
//                 "elementType": "labels.text.stroke",
//                 "stylers": [
//                   {
//                     "color": "#1d2c4d"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "road.highway",
//                 "elementType": "geometry",
//                 "stylers": [
//                   {
//                     "color": "#2c6675"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "road.highway",
//                 "elementType": "geometry.stroke",
//                 "stylers": [
//                   {
//                     "color": "#255763"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "road.highway",
//                 "elementType": "labels.text.fill",
//                 "stylers": [
//                   {
//                     "color": "#b0d5ce"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "road.highway",
//                 "elementType": "labels.text.stroke",
//                 "stylers": [
//                   {
//                     "color": "#023e58"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "transit",
//                 "stylers": [
//                   {
//                     "visibility": "off"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "transit",
//                 "elementType": "labels.text.fill",
//                 "stylers": [
//                   {
//                     "color": "#98a5be"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "transit",
//                 "elementType": "labels.text.stroke",
//                 "stylers": [
//                   {
//                     "color": "#1d2c4d"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "transit.line",
//                 "elementType": "geometry.fill",
//                 "stylers": [
//                   {
//                     "color": "#283d6a"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "transit.station",
//                 "elementType": "geometry",
//                 "stylers": [
//                   {
//                     "color": "#3a4762"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "water",
//                 "elementType": "geometry",
//                 "stylers": [
//                   {
//                     "color": "#0e1626"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "water",
//                 "elementType": "labels.text.fill",
//                 "stylers": [
//                   {
//                     "color": "#4e6d70"
//                   }
//                 ]
//               }
//             ]
//   }

//  var map = new google.maps.Map(
//    document.getElementById("mapone"),
//    options
   
//  );
//  const centerControlDiv = document.createElement("div");
//   CenterControl(centerControlDiv, map);
//   map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(centerControlDiv);
  
 
// }

// let map;


/**
 * The CenterControl adds a control to the map that recenters the map on
 * Chicago.
 * This constructor takes the control DIV as an argument.
 * https://developers.google.com/maps/documentation/javascript/controls#CustomControls
 * https://developers.google.com/maps/documentation/javascript/examples/control-custom#maps_control_custom-javascript
 * @constructor
 */
// function CenterControl(controlDiv, map) {
  // Set CSS for the control border.
  // const controlUI = document.createElement("div");
  // controlUI.style.backgroundColor = "#fff";
  // controlUI.style.border = "2px solid #fff";
  // controlUI.style.borderRadius = "3px";
  // controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  // controlUI.style.cursor = "pointer";
  // controlUI.style.marginTop = "8px";
  // controlUI.style.marginBottom = "22px";
  // controlUI.style.textAlign = "center";
  // controlUI.title = "Click to recenter the map";
  // controlDiv.appendChild(controlUI);
  // Set CSS for the control interior.
  // const controlText = document.createElement("div");
  // controlText.style.color = "rgb(25,25,25)";
  // controlText.style.fontFamily = "Roboto,Arial,sans-serif";
  // controlText.style.fontSize = "16px";
  // controlText.style.lineHeight = "38px";
  // controlText.style.paddingLeft = "5px";
  // controlText.style.paddingRight = "5px";
  // controlText.innerHTML = "Play";
  // controlUI.appendChild(controlText);
  // Setup the click event listeners: simply set the map to Chicago.
  // controlUI.addEventListener("click", () => {
    // map.setCenter(chicago);
//   });
// }






function initMap(){
  var map=new google.maps.Map(document.getElementById("mapone"), {
    zoom:4,
    center: {lat:37.0902, lng:-95.7129},
    mapTypeControl: false,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_CENTER,
    },
    zoomControl: true,
    scaleControl: false,
    streetViewControl: false,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP,
    },
    fullscreenControl: true,
    fullscreenControlOptions: {
      position: google.maps.ControlPosition.RIGHT_BOTTOM,
    },
    styles: [
              {
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#1d2c4d"
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#8ec3b9"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#1a3646"
                  }
                ]
              },
              {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "administrative.country",
                "elementType": "geometry.stroke",
                "stylers": [
                  {
                    "color": "#4b6878"
                  }
                ]
              },
              {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#64779e"
                  }
                ]
              },
              {
                "featureType": "administrative.province",
                "elementType": "geometry.stroke",
                "stylers": [
                  {
                    "color": "#4b6878"
                  }
                ]
              },
              {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [
                  {
                    "color": "#334e87"
                  }
                ]
              },
              {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#023e58"
                  }
                ]
              },
              {
                "featureType": "poi",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#283d6a"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#6f9ba5"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#1d2c4d"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#023e58"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#3C7680"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#304a7d"
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
                    "color": "#98a5be"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#1d2c4d"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#2c6675"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                  {
                    "color": "#255763"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#b0d5ce"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#023e58"
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
                    "color": "#98a5be"
                  }
                ]
              },
              {
                "featureType": "transit",
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#1d2c4d"
                  }
                ]
              },
              {
                "featureType": "transit.line",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#283d6a"
                  }
                ]
              },
              {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#3a4762"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#0e1626"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#4e6d70"
                  }
                ]
              }
            ]
  });

  // for time line slider
  var playButton = document.getElementById('playbutton');
  map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(playButton);
  
  var slider = document.getElementById('myProgress');
  map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(slider);


  // for map search bar
  // var input = document.getElementById('searchInput');
  // map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

  // Create the search box and link it to the UI element.
  var input = document.getElementById('searchInput');
  const searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });
  let markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    // Clear out the old markers.
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];
    // For each place, get the icon, name and location.
    const bounds = new google.maps.LatLngBounds();
    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }
      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };
      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location,
        })
      );

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    // plots the bounds
    map.fitBounds(bounds);
    // controls how close to zoom in when the search bar is used
    map.setZoom(9);
  });
  // var autocomplete = new google.maps.places.Autocomplete(input);
  // autocomplete.bindTo('bounds', maps);

  // var infowindow = new google.maps.InfoWindow();
  // var marker = new google.maps.Marker({
  //   map: map,
  //   anchorPoint: new google.maps.Point(0,-29)
  // });

  // autocomplete.addListener('place_changed', function() {
  //   infowindow.close();
  //   marker.setVisible(false);
  //   var place = autocomplete.getPlace();
  //   if (!place.geometry) {
  //     window.alert("Autocomplete's returned place contains no geometry");
  //     return;
  //   }

    // If place has geometry, then place on the map.
  //   if (place.geometry.viewport) {
  //     map.fitBounds(place.geometry.viewport);
  //   }
  //   else {
  //     map.setCenter(place.geometry.location);
  //     map.setZoom(17);
  //   }
  //   marker.setIcon(({
  //     url:place.icon,
  //     size: new google.maps.Size(71, 71),
  //     origion: new google.maps.Point(0,0),
  //     anchor: new google.maps.Point(17,34),
  //     scaledSize: new google.maps.Size(35,35)
  //   }));
  //   marker.setPosition(place.geometry.location);
  //   marker.setCenter(true);

  //   var address = '';
  //   if (place.address_components) {
  //     address = [
  //       (place.address_compnents[0] && place.address_components[0].short_name || ''),
  //       (place.address_compnents[1] && place.address_components[1].short_name || ''),
  //       (place.address_compnents[2] && place.address_components[2].short_name || '')
  //     ].join(' ');
  //   }

  //   infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
  //   infowindow.open(map, marker);

  //   // add in location details for the information box
  // });
  
 
}

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("slidecontainer");
    var width = 1;
    // thss line adjusts the frames
    var id = setInterval(frame, 50);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
// controls the maps loading as the page is opened
google.maps.event.addDomtListener(window, "load", initMap);


