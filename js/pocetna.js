var zaPocetnu = document.getElementById("zaPocetnu");

var minimum = 0;
var maksimum = 0;

function ucitaj() {

       var zahtev = new XMLHttpRequest();
       zahtev.open('GET', '../json/youtube.json');

       zahtev.onload = function() {
           var podaci = JSON.parse(zahtev.responseText);
           renderHTML(podaci);
           console.log(podaci[0]);
       }

       zahtev.send();

}

function renderHTML(podaci)
{
    var htmlString = "<div class='middle'><h1 class='ytWelcome'>Dobrodošli</h1><h2 class='ytRand'>Random pesma:</h2>";
    
    maksimum = podaci.length;
    
    var i = getRandomInt(0, maksimum-1);
    
    console.log(i);
    
    htmlString += "<img class='rotate360' id='pesmaslika' style='display:block; margin: 0 auto;' src='../images/" + podaci[i].slika + "'><br><h3 class='ytPesma'>" + podaci[i].naslov + "</h3><br><iframe id='video' src='" + podaci[i].adresa + "' frameborder = '0' allowfullscreen></iframe>";
    
    htmlString += "<br><button class='fensibtn' onclick='location.reload();'>Osveži</button></div>";
    
    zaPocetnu.insertAdjacentHTML('beforeend', htmlString);
    
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}