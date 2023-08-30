function openOverlay(){
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'block';


var destination = ['Daanbantayan', 'Medellin', 'Bogo City', 'Tabogon', 'Borbon', 'Sugod', 'Catmon', 'Carmen', 'Danao City', 'Compostela', 
'Liloan', 'Consolacion', 'Mandaue City', 'Cebu City'];

var overlayButtons = document.querySelector('.overlay-buttons');
overlayButtons.innerHTML = "";

for(var i = 0; i < destination.length; i++){
    var button = document.createElement('button');
    button.textContent = destination[i];
    button.addEventListener('click', function (){
        console.log('Button Clicked: ' + this.textContent);

        switch (this.textContent){
            case 'Daanbantayan':
                openSecondOverlay(10, 'Places in Daanbantayan', 
                ['Maya Port', 'Tapilon', 'CTU Daanbantayan', 'Poblacion', 'Pajo', 'Malingin', 'Bagay', 'Calape',
            'Malbago', 'Bateria']);
                break;

            case 'Medellin':
                openSecondOverlay(6, 'Places in Medellin',
                ['Tindog', 'Philsca', 'Aisle', 'Canhabagat', 'Mercedes Plantation', 'Dayhagon'],);
                break;

            case 'Bogo City':
                openSecondOverlay(6, 'Places in Bogo City',
                ['Don Pedro', 'Taytayan', 'Cogon', 'Dakit', 'Lapaz', 'Binabag']);
                break;
            
            case 'Tabogon':
                openSecondOverlay(3, 'Places in Tabogon',
                ['Libjo', 'Caduawan', 'Ilihan']);
                break;
            
            case 'Borbon':
                openSecondOverlay(5, 'Places in Borbon',
                ['Don Gregorio Antigua', 'Sagay', 'Poblacion', 'Clavera', 'Lugo']);
                break;

            case 'Sugod':
                openSecondOverlay(3, 'Places in Sugod',
                ['Liki', 'Damolog', 'Bawo']);
                break;

            case 'Catmon':
                openSecondOverlay(5, 'Places in Catmon', 
                ['San Jose', 'Proper', 'Macaas', 'Catmondaan', 'Puente']);
                break;

            case 'Carmen':
                openSecondOverlay(4, 'Places in Carmen',
                ['Luyang', 'Poblacion', 'Dawis Norte', 'Dawis Sur']);
                break;

            case 'Danao City':
                openSecondOverlay(7, 'Places in Danao',
                ['Dunggoan', 'Guinsay', 'Taytay', 'CTU Danao', 'Suba', 'Looc', 'Maslog']);
                break;

            case 'Compostela':
                openSecondOverlay(2, 'Places in Compostela', 
                ['Green Lagoon', 'Compostela Hall']);
                break;

            case 'Liloan':
                openSecondOverlay(4, 'Places in Liloan', 
                ['Cotcot', 'Jubay', 'Poblacion', 'Yati']);
                break;

            case 'Consolacion':
                openSecondOverlay(3, 'Places in Consolacion',
                ['Lamac', 'SM City', 'Poblacion Oriental']);
                break;

            case 'Mandaue City':
                openSecondOverlay(5, 'Places in Mandaue City',
                ['Gaisano Grand', 'Pacific Mall', 'Mandaue City', 'Tipolo', 'Subangdako']);
                break;

            case 'Cebu City':
                openSecondOverlay(1, 'Places in Cebu City', ['SM City']);
                break;

            default:
                closeOverlay();
        }
    });

    overlayButtons.appendChild(button);
}
}

// ******************* END OF FIRST OVERLAY ******************* 

// ******************* START OF SECOND OVERLAY ******************* 

function openSecondOverlay(numberOfButtons, title, places){
    const secondOverlay = document.getElementById('second-overlay');
    secondOverlay.style.display = 'block';
    resetSecondOverlaySize();
    const secondOverlayHeader = document.querySelector('.overlay-header h2');
    secondOverlayHeader.textContent = title;

    const secondOverlayButtons = document.getElementById('second-overlay-buttons');
    secondOverlayButtons.innerHTML = "";

    for(let i = 0; i < numberOfButtons; i++){
        const button = document.createElement('button');
        button.textContent = `${places[i]}`;

        button.addEventListener('click', function (){
            var province = removeWordsFromString(title, 'Places in');

            var destination = document.getElementById('destination');
            destination.textContent = places[i];
            destination.style.opacity = 1;
            choosenDestination = `${places[i]}, ${province}`;
            document.getElementById('province').textContent = province;

            if(document.getElementById('province').textContent == 'Danao'){
                document.getElementById('province').textContent = 'Danao City';
            }
            getTargetLocation();
            closeSecondOverlay();
            closeOverlay();
        });

        secondOverlayButtons.appendChild(button);
    }
}

function resetSecondOverlaySize(){
    const secondOverlayContent = document.querySelector('.overlay-content');
    secondOverlayContent.style.width = '100%';
}

function closeOverlay(){
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

function closeSecondOverlay(){
    const secondOverlay = document.getElementById('second-overlay');
    secondOverlay.style.display = 'none';
}

function removeWordsFromString(inputString, wordsToRemove){
    const words = inputString.split(' ');
    const filterWords = words.filter((word) => !wordsToRemove.includes(word));
    const resultString = filterWords.join(' ');
    return resultString;
}

let currentLatitude, currentLongitude;
let targetLatitude, targetLongitude;
let choosenDestination;

function getCurrentLocation(){
    if('geolocation' in navigator){
        navigator.geolocation.watchPosition(successCurrent, error);
    } else{
        alert('Geolocation is not available in this browser.');
    }
}