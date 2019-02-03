var zaRaspored = document.getElementById("zaRaspored");

function ucitaj() {

       var zahtev = new XMLHttpRequest();
       zahtev.open('GET', '../json/ispiti.json');

       zahtev.onload = function() {
           var podaci = JSON.parse(zahtev.responseText);
           renderHTML(podaci);
           console.log(podaci[0]);
       }

       zahtev.send();

}

function renderHTML(podaci)
{
    var htmlString = "<div style='overflow-x:auto'><h1 id='raspored'>Raspored ispita:</h1><table>";
    
    htmlString += "<tr><th>Predmet</th><th>Profesor</th><th>Datum</th></tr>";
    
    for(var i = 0; i < podaci.length; i++)
    {
        htmlString += "<tr><td>" + podaci[i].predmet + "</td><td>" + podaci[i].profesor + "</td><td>" + podaci[i].datum[0] + "<br>" + podaci[i].datum[1] + "</td></tr>"
    }
    
    htmlString += "</table></div>"
    
    zaRaspored.insertAdjacentHTML('beforeend', htmlString);
}