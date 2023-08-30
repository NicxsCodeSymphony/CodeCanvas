let fare;
var passenger;
let distanceInKm;

function calculateFare(distanceInMeters){
    distanceInKm = distanceInMeters;

    passenger = document.getElementById('input-number').innerText;

    if(distanceInKm <= 0.01){
        totalPayment();
        return 0;
    }

    else if(distanceInKm <= 10.5){
        fare = (distanceInKm) * 2;
        totalPayment();
        return parseFloat(fare.toFixed(0)); 
    }

    else if(distanceInKm <= 26.15){
        fare = (distanceInKm) * 2.80;
        totalPayment();
        return parseFloat(fare.toFixed(0));
    }

    else if(distanceInKm <= 60.45){
        fare = (distanceInKm) * 2.15;
        totalPayment();
        return parseFloat(fare.toFixed(0));
    }

    else if(distanceInKm <= 86){
        fare = (distanceInKm) * 2.33;
        totalPayment();
        return parseFloat(fare.toFixed(0));
    }

    else{
        fare = (distanceInKm) * 2.33;
        totalPayment();
        return parseFloat(fare.toFixed(0));
    }
}

function totalPayment(){
    passenger = document.getElementById('input-number').innerText;

    if(fare == null){
        return;
    }

    let total = fare.toFixed(0) * passenger;
    document.getElementById('netPrice').textContent = `₱ ${total.toFixed(2)}`;

    var discount = document.getElementById('discount').innerText;
    var intVal = parseInt(discount.replace('%', '')) / 100;
    var totalFare = total - (total * intVal);
    document.getElementById('totalPrice').textContent = '₱ ' + totalFare.toFixed(2);

    busFare(total);
    
    
    // document.getElementById('totalPrice').textContent = discount * percent;
    
}

