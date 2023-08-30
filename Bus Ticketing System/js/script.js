let count = 1;
var ticket = document.getElementById('numOfTicket').innerText;
var totalFare;

if(count < 0){
    count = 0;
}

function sub(){
    const passenger = document.getElementById('input-number');
    const numOfTicket = document.getElementById('numOfTicket');
    const price = document.getElementById('netPrice');
    if(count > 1){
    count--;
    passenger.textContent = count;
    numOfTicket.textContent = count;
    price.textContent = totalFare * count;
    totalPayment();
    
    if(price.innerText == 'NaN'){
        price.textContent = '₱ 0.00';
        total.textContent = '₱ 0.00';
    }
    
    } else{
        count = 0;
    }
}

function add(){
    const passenger = document.getElementById('input-number');
    const numOfTicket = document.getElementById('numOfTicket');
    const price = document.getElementById('netPrice');
    const total = document.getElementById('totalPrice');

    count++;
    passenger.textContent = count;       
    numOfTicket.textContent = count;
    total.textContent = '₱ ' + totalFare * count;
    price.textContent = totalFare * count;
    totalPayment();

    if(price.innerText == 'NaN'){
        price.textContent = '₱ 0.00';
        total.textContent = '₱ 0.00';
    }

}

function busFare(total){
    totalFare = total;
}