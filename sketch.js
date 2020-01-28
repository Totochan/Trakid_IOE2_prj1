var _lat = 0;
var _lon = 0;
var previousD = 0;

var targetLat = 34.4;
var targetLon = -118.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (geoCheck() === false) { 
    alert("geolocation is not supported on this device");
  } else {
		intervalCurrentPosition(positionUpdated, 1000);
  }
  textAlign(CENTER);
  textSize(windowWidth*0.1);
}



function draw() {
  background(255,255,255);
	text("Latitude\n"+_lat, width/2, 0.33*height);
	text("Lontitude\n"+_lon, width/2, 0.66*height);
  
  var d = dist(_lat, _lon, targetLat, targetLon);
  print(d);
  
  if (d - previousD > 0) {
    // colder 
  } else {
    // hotter 
  }
  previousD = d;
  
  //var b = map(d, 0, 1, 0, 255);
  //background(b);
  

}


function positionUpdated(position) {
  _lat = nfc(position.latitude, 8);
  _lon = nfc(position.longitude, 8);
}
