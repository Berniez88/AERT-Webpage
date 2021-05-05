// Multiple lists that store each specific data in the user input for the query page
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

    // Show our output on the left side, this is just a visual representation to make sure the code functions
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

// This function below allows the user to click reset in order to clear all the data in the table, the commented out code will just set the date to the most recent date
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

// This function generates the entire google map API 

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