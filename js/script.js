var i = 0;
var valid = 0;

function openNav() {
    if((i % 2) == 1) osvezi();
    else
    {
        document.getElementById("vertical-menu").style.width = "300px";
        i++;
    }
}

function closeNav() {
    document.getElementById("vertical-menu").style.width = "0px";
}

function osvezi()
{
    closeNav();
    i++;
    
    console.log(i);
}

function generisiIframe(i)
{
    osvezi();
    
    var ifrejm = "<iframe style='height:95%;' src='";
    var ind = 0;
    
    switch(i) 
    {
        case 0:
            //document.getElementById("container").style.visibility = "hidden";
            //document.getElementById("main").style.visibility = "hidden";
            ifrejm += "pages/pocetna.html";
            break;
        case 1:
            
            break;
            
        case 2:
            ifrejm += "pages/raspored.html";
            break; 
            
        case 3:
            ifrejm += "https://imi.pmf.kg.ac.rs/";
            break;
            
        case 4:
            ifrejm += "https://www.pmf.kg.ac.rs/";
            break;
            
        case 5:
            
            break;
            
        case 6:
            ifrejm += "http://www.mozzartsport.com/";
            break;
            
        case 7:
            ifrejm += "https://kompjuteras.com/";
            break;
            
        case 8:
            ifrejm += "https://sr.m.wikipedia.org/";        
            break;
            
        case 9:
            ifrejm += "http://www.t.flashscore.com/";        
            break; 
        case 10:
            ifrejm += "games/snake/index.html";
            break;
            
        case 11:
            ifrejm += "games/minesweeper/index.html";  
            break;
        case 12:
            ifrejm += "pages/osajtu.html"
            break;
        
        default:
            document.getElementById("mainPart").innerHTML = "Izaberite nesto!";
        }    
        
        if(ind == 0)
        {
            ifrejm += "' frameBorder='0'></iframe>";
            document.getElementById("mainPart").innerHTML = ifrejm;
        }
}



var pokusaji = 3;

function validate()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username == "Bokunda" && password == "bokunda#123")
    {
        alert ("Uspešno ste se prijavili!");
        document.getElementById("meni").style.visibility = "visible";
        document.getElementById("odjava").style.visibility = "visible";
        //document.getElementById("mainPart").innerHTML = "<div class='outer'><div class='middle'><div class='inner'><h1 id='dobrodosli'>Dobrodošli!</h1></div></div></div>";
        generisiIframe(0);
        i = 0;
        valid = 1;
        return false;
    }
    else
    {
        pokusaji--;
        alert("Ostalo vam je još " + pokusaji + " pokušaja!;");

        if( pokusaji == 0)
        {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}
