// // This example adds a user-editable rectangle to the map.
// // When the user changes the bounds of the rectangle,
// // an info window pops up displaying the new bounds.
// let rectangle;
// let map;
// let infoWindow;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 37.09, lng: -95.71 },
//     zoom: 9,
//   });
//   const bounds = {
//     north: 38.12,
//     south:37.0267,
//     east: -94.739,
//     west: -96.882,
//   };
//   // Define the rectangle and set its editable property to true.
//   rectangle = new google.maps.Rectangle({
//     bounds: bounds,
//     editable: true,
//     draggable: true,
//   });
//   rectangle.setMap(map);
//   // Add an event listener on the rectangle.
//   rectangle.addListener("bounds_changed", showNewRect);
//   // Define an info window on the map.
//   infoWindow = new google.maps.InfoWindow();
// }

// /** Show the new coordinates for the rectangle in an info window. */
// function showNewRect() {
//   const ne = rectangle.getBounds().getNorthEast();
//   const sw = rectangle.getBounds().getSouthWest();
//   const contentString =
//     "<b>Rectangle moved.</b><br>" +
//     "New north-east corner: " +
//     ne.lat() +
//     ", " +
//     ne.lng() +
//     "<br>" +
//     "New south-west corner: " +
//     sw.lat() +
//     ", " +
//     sw.lng();
//   // Set the info window's content and position.
//   infoWindow.setContent(contentString);
//   infoWindow.setPosition(ne);
//   infoWindow.open(map);
// }


// The following example creates complex markers to indicate beaches near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.

// const minLong = document.querySelector('.minLong');
// const mLat = document.querySelector('.minLat');
// const maxLong = document.querySelector('.maxLong');
// const minLat = document.querySelector('.maxLat');
// function initMap() {
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 10,
//       center: { lat: 0, lng: 0 },
//     });
//     setMarkers(map);
//   }
//   // Data for the markers consisting of a name, a LatLng and a zIndex for the
//   // order in which these markers should display on top of each other.
//   const beaches = [
//       ["Longitude", ]
//     ["Bondi Beach", -33.890542, 151.274856, 4],
//     ["Coogee Beach", -33.923036, 151.259052, 5],
//     ["Cronulla Beach", -34.028249, 151.157507, 3],
//     ["Manly Beach", -33.80010128657071, 151.28747820854187, 2],
//     ["Maroubra Beach", -33.950198, 151.259302, 1],
//   ];
//   const beaches = [
    
//   ]
  
//   function setMarkers(map) {
//     var bounds = new google.maps.LatLngBounds();
//     // Adds markers to the map.
//     for (let i = 0; i < beaches.length; i++) {
//       const beach = beaches[i];
//       var marker = new google.maps.Marker({
//         position: { lat: beach[1], lng: beach[2] },
//         map,
//         title: beach[0],
//       });
//       bounds.extend(marker.getPosition());
//     }
//     map.fitBounds(bounds);
//   }

const minLong = [];
const minLat = [];
const maxLong = [];
const maxLat = [];


const startdate = [];
const starthour = [];
const endhour = [];
const enddate = [];
const email = [];

const minimumlong = document.getElementById("minlong");
const minimumlat = document.getElementById("minlat");
const maximumlong = document.getElementById("maxlong");
const maximumlat = document.getElementById("maxlat");
const xemail = document.getElementById("email");
const startingdate = document.getElementById("startday");
const startinghour = document.getElementById("shour")

const endingdate = document.getElementById("endday");
const endinghour = document.getElementById("ehour");

const messageBox  = document.getElementById("display");

function insert () {
  minLong.push(minimumlong.value);
  minLat.push(minimumlat.value);
  maxLong.push(maximumlong.value);
  maxLat.push(maximumlat.value);
  startdate.push(startingdate.value);
  starthour.push(startinghour.value);
  enddate.push(endinghour.value);
  endhour.push(endingdate.value);
  email.push(xemail.value)

  display();
}

function display(){
  minimumlong.value = "";
  minimumlat.value = "";
  maximumlong.value = "";
  maximumlat.value = "";
  startingdate.value = "";
  startinghour.value = "";
  endingdate.value = "";
  endinghour.value = "";
  xemail.value = "";

    // Show our output
    // messageBox.innerHTML = "";
  
    // messageBox.innerHTML += "Minimum Longitude: " + minLong.join(", ") + "<br/>";
    // messageBox.innerHTML += "Minimum Latitude: " + minLat.join(", ") + "<br/>";
    // messageBox.innerHTML += "Maximum Longitude: " + maxLong.join(", ") + "<br/>";
    // messageBox.innerHTML += "Maximum Latitude: " + maxLong.join(", ") + "<br/>";
    // messageBox.innerHTML += "Starting Date: " + startdate.join(", ") + "<br/>";
    // messageBox.innerHTML += "Starting Hour: " + starthour.join(", ") + "<br/>";
    // messageBox.innerHTML += "Ending Date: " + enddate.join(", ") + "<br/>";
    // messageBox.innerHTML += "Ending Hour: " + endhour.join(", ") + "<br/>";
    // messageBox.innerHTML += "Email: " + email.join(", ");

}
function setDateAndHour() {
  // var date = new Date();
  // var day = date.getDate();
  // var month = date.getMonth() + 1;
  // var year = date.getFullYear();
  // var day2 = date.getDate() - 2;
  // if (month < 10) month = "0" + month;
  // if (day < 10) day = "0" + day;

  // var endday = year + "-" + month + "-" + day;
  // var today = year + "-" + month + "-" + day;
  // var yesterday = year + "-" + month + "-" + day2;
  // document.getElementById('startday').value = today;
  
  // document.getElementById('endday').value = endday;

  document.getElementById('startday').value = "";
  document.getElementById('endday').value = "";

  document.getElementById('shour').value = 1;
  document.getElementById('ehour').value = 1;

  //This portion will be clearing out the Longitude and latitude inputs
  document.getElementById('minlong').value = '';
  document.getElementById('minlat').value = '';
  document.getElementById('maxlong').value = '';
  document.getElementById('maxlat').value = '';
  document.getElementById('email').value = '';
}

function initMap(){
  var options ={
    zoom:4,
    center: {lat:37.0902, lng:-95.7129},
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
     
  }

 var map = new google.maps.Map(
   document.getElementById("map"),
   options
 );
}

// controls the maps loading as the page is opened
google.maps.event.addDomtListener(window, "load", initMap);