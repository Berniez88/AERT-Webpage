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

function setDateAndHour() {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var day2 = date.getDate() - 2;
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  var today = year + "-" + month + "-" + day;
  var yesterday = year + "-" + month + "-" + day2;
  document.getElementById('startday').value = today;
  document.getElementById('shour').value = 0;
  document.getElementById('ehour').value = 23;
}