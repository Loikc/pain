var json = 
[//metz
  {
    "description": "Baguette uniquement","latitude": "49.117754","longitude": "6.182188"
  },
  {
    "description": "Pain et viennoiserie","latitude": "49.060077","longitude": "6.154446"
  },
  {
    "description": "Multiples sortes de pains","latitude": "49.134301","longitude": "6.198688"
  },
  //nancy
  {
    "description":"Baguette uniquement","latitude":"48.68540","longitude":"6.174532" 
  },
  {
    "description":"Pain et viennoiserie","latitude":"48.692307","longitude":"6.126325" 
  },
  {
    "description":"Multiples sortes de pains","latitude":"48.620455","longitude":"6.168486" 
  }
];

var googleMaps = document.querySelector('google-map');

function placeMarker(jsonObj) {
  var unMarqueur = document.createElement('google-map-marker');
  unMarqueur.setAttribute
  googleMaps.appendChild(unMarqueur);

}

var url = '../src/distributeurs.json';
var xmlhttp = new XMLHtpRequest();

xmlhttp.open('GET', url);
xmlhttp.responseType = 'json';
xmlhttp.send();
request.onload = function () {
  var distributeurs = request.response;
  placeMarker(distributeurs);
}