function cookieLang() {
console.log(document.cookie)
if (document.cookie.split(';').some((item) => item.includes('lang=en'))) {
    document.getElementById("language").value = "en";
    document.getElementById("mypack").innerHTML = "My Windows 7 pack!";
    document.getElementById("2009").innerHTML = "Do you have a computer from 2009? This pack allows you to install software without Internet Explorer!<br/> It is updated to be compatible and comes in 2 languages!";
} else if (document.cookie.split(';').some((item) => item.includes('lang=fr'))) {
    document.getElementById("mypack").innerHTML = "Mon Pack Windows 7 !";
    document.getElementById("2009").innerHTML = "Vous avez un ordinateur vieux de 2009 ? Grace à ce pack vous pourrez installer des logiciels sans passer par Internet Explorer !<br/> De plus il est mis à jour pour etre comptablite et existe en deux langues différentes afin d'étendre un plus grand publique ! ";
}
}
function langSwitch() {
    var langId = document.getElementById("language").value;
    document.cookie = `lang=${langId};`
    if (document.cookie.split(';').some((item) => item.includes('lang=en'))) {
        document.getElementById("mypack").innerHTML = "My Windows 7 pack!";
        document.getElementById("2009").innerHTML = "Do you have a computer from 2009? This pack allows you to install software without Internet Explorer!<br/> It is updated to be compatible and comes in 2 languages!";
    } else if (document.cookie.split(';').some((item) => item.includes('lang=fr'))) {
        document.getElementById("mypack").innerHTML = "Mon Pack Windows 7 !";
        document.getElementById("2009").innerHTML = "Vous avez un ordinateur vieux de 2009 ? Grace à ce pack vous pourrez installer des logiciels sans passer par Internet Explorer !<br/> De plus il est mis à jour pour etre comptablite et existe en deux langues différentes afin d'étendre un plus grand publique ! ";
    }
}
