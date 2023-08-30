function getCurrentLocation(){
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(success, error);
    } else{
        alert('Geolocation is not available in this browser.');
    }
}

function success(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

    currentLatitude = latitude;
    currentLongitude = longitude;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const address = data.address;
        const barangay = address.neighbourhood || '';
        const city = address.city || address.town || address.village || '';
        var city1;
        if(city == "Bogo"){
            city1 = city + ' City';
        } else{
            city1 = city;
        }

        const province = address.state || address.region || '';
        const fullAdress = `${barangay}, ${city1}, ${province}`;
        console.log(fullAdress);
        document.getElementById('currLocation').innerText = fullAdress;
    })
    .catch((error) => {
        console.error('Error fetching data: ', error);
    });
}

function error(error){
    console.error('Error getting location: ', error);
}

getCurrentLocation();