function getTargetLocation() {
    const targetLocation = choosenDestination + ', Cebu';

    if(targetLocation.includes('Tapilon')){
        targetLatitude = 11.2722;
        targetLongitude = 124.0335;
        calculateDistance();
    }

    else if(targetLocation.includes('CTU Daanbantayan')){
      targetLatitude = 11.2677;
      targetLongitude = 124.0086;
      calculateDistance();
    }

    else if(targetLocation.includes('Philsca')){
      targetLatitude = 11.1375;
      targetLongitude = 124.0021;
      calculateDistance();
    }

    else if(targetLocation.includes('Aisle')){
        targetLatitude = 11.1309;
        targetLongitude = 123.9980;
        calculateDistance();
    }

    else if(targetLocation.includes('Binabag')){
      targetLatitude = 10.9878;
      targetLongitude = 123.9722;
      calculateDistance();
    }

    else if(targetLocation.includes('Clavera')){
        targetLatitude = 10.8349;
        targetLongitude = 123.9842;
        calculateDistance();
    }

    else if(targetLocation.includes('Liki')){
        targetLatitude = 10.7957;
        targetLongitude = 123.9945;
        calculateDistance();
    }

    else if(targetLocation.includes('Damolog')){
        targetLatitude = 10.7708;
        targetLongitude = 124.0001;
        calculateDistance();
    }

    else if(targetLocation.includes('Bawo')){
        targetLatitude = 10.7327;
        targetLongitude = 123.9945;
        calculateDistance();
    }
    
    else if(targetLocation.includes('Proper')){
      targetLatitude = 10.7209;
      targetLongitude = 124.0121;
      calculateDistance();
    }


    else if(targetLocation.includes('CTU Danao')){
      targetLatitude = 10.5031;
      targetLongitude = 124.0307;
      calculateDistance();
    }

    else if(targetLocation.includes('Puente')){
      targetLatitude = 10.6131;
      targetLongitude = 124.0224;
      calculateDistance();
    }

    else if(targetLocation.includes('Pacific')){
      targetLatitude = 10.3410;
      targetLongitude = 123.9475;
      calculateDistance();
    }

    else if(targetLocation.includes('Subangdako')){
      targetLatitude = 10.3230;
      targetLongitude = 123.9245;
      calculateDistance();
    }
  
    else if(targetLocation.includes('Cogon')){
      targetLatitude = 11.0427;
      targetLongitude =  124.0001;
      calculateDistance();
    }
    else if(targetLocation.includes('Dakit')){
      targetLatitude = 11.0232;
      targetLongitude = 124.0001;
      calculateDistance();
    }

    else if(targetLocation.includes('Lapaz')){
      targetLatitude = 11.0003;
      targetLongitude = 123.9889;
      calculateDistance();
    }
    

    else{
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(targetLocation)}`;
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          targetLatitude = parseFloat(data[0].lat);
          targetLongitude = parseFloat(data[0].lon);
          calculateDistance();
        } else {
          alert('Location not found.');
        } 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });}
  }
  
  function calculateDistance() {
    if (!currentLatitude || !currentLongitude || !targetLatitude || !targetLongitude) {
      console.error('Location data incomplete.');
      return;
    }
  
const earthRadius = 6371; // Radius of the Earth in kilometers
const lat1 = toRadians(currentLatitude);
const lon1 = toRadians(currentLongitude);
const lat2 = toRadians(targetLatitude);
const lon2 = toRadians(targetLongitude);

const dLat = lat2 - lat1;
const dLon = lon2 - lon1;

const a =
  Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

// Distance in kilometers
const distanceKm = earthRadius * c;

let distance;
let unit;

if (distanceKm < 1) {
  // Convert kilometers to meters
  distance = (distanceKm * 1000).toFixed(0);
  arrivalTime(distance / 1000);
  unit = 'm';
} else {
  // Keep distance in kilometers
  distance = distanceKm.toFixed(0);
  unit = 'km';
  arrivalTime(distance);
}

document.getElementById('distance').textContent = distance + ' ' + unit;
console.log( 'Payment: ' + calculateFare(distanceKm.toFixed(2)));




  }
  
  function toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }
  
  function successCurrent(position) {
    currentLatitude = position.coords.latitude;
    currentLongitude = position.coords.longitude;
  
    // Update the distance whenever the current location changes
    if (choosenDestination) {
      getTargetLocation();
    }
  }
  
  function error(error) {
    console.error('Error getting location:', error);
  }