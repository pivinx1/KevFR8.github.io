function cookieLang() {
console.log(document.cookie)
if (document.cookie.split(';').some((item) => item.includes('lang=en'))) {
    document.getElementById("language").value = "en";
    document.getElementById("welcome").innerHTML = "Welcome to FireWave!";
    document.getElementById("windows7pack").innerHTML = "Windows 7 pack";
    document.getElementById("about").innerHTML = "About me";
    document.getElementById("contact").innerHTML = "Contact me";
    document.getElementById("computer_fan").innerHTML = "Are you a fan of computers? This site lets you download my packs and much more!<br/> Don't hesitate to contact me in case of problems!";
    document.getElementById("current_video").innerHTML = "Latest video";
    document.getElementById("copyright").innerHTML = "&copy;KevCoorp's 2017 - 2021<br/>Translations done by Zai";
} else if (document.cookie.split(';').some((item) => item.includes('lang=fr'))) {
    document.getElementById("welcome").innerHTML = "Bienvenue sur FireWave !";
    document.getElementById("windows7pack").innerHTML = "Pack Windows 7";
    document.getElementById("about").innerHTML = "A propois de moi";
    document.getElementById("contact").innerHTML = "Me Contactez";
    document.getElementById("computer_fan").innerHTML = "Fan de l'informatique ? Ce site vous permet de découvrir mes packs et bien plus encore !<br/>N'hésitez pas à me contactez en cas de problèmes !";
    document.getElementById("current_video").innerHTML = "La vidéo du moment !";
    document.getElementById("copyright").innerHTML = "&copy;KevCoorp's 2017 - 2021<br/>Traduction réalisée par Zai";
}
}
function langSwitch() {
    var langId = document.getElementById("language").value;
    document.cookie = `lang=${langId};`
    if (document.cookie.split(';').some((item) => item.includes('lang=en'))) {
        document.getElementById("welcome").innerHTML = "Welcome to FireWave!";
        document.getElementById("windows7pack").innerHTML = "Windows 7 pack";
        document.getElementById("about").innerHTML = "About me";
        document.getElementById("contact").innerHTML = "Contact me";
        document.getElementById("computer_fan").innerHTML = "Are you a fan of computers? This site lets you download my packs and much more!<br/> Don't hesitate to contact me in case of problems!";
        document.getElementById("current_video").innerHTML = "Latest video";
        document.getElementById("copyright").innerHTML = "&copy;KevCoorp's 2017 - 2021<br/>Translations done by Zai";
    } else if (document.cookie.split(';').some((item) => item.includes('lang=fr'))) {
        document.getElementById("welcome").innerHTML = "Bienvenue sur FireWave !";
        document.getElementById("windows7pack").innerHTML = "Pack Windows 7";
        document.getElementById("about").innerHTML = "A propois de moi";
        document.getElementById("contact").innerHTML = "Me Contactez";
        document.getElementById("computer_fan").innerHTML = "Fan de l'informatique ? Ce site vous permet de découvrir mes packs et bien plus encore !<br/>N'hésitez pas à me contactez en cas de problèmes !";
        document.getElementById("current_video").innerHTML = "La vidéo du moment !";
        document.getElementById("copyright").innerHTML = "&copy;KevCoorp's 2017 - 2021<br/>Traduction réalisée par Zai";
    }
}