function cookieLang() {
console.log(document.cookie)
if (document.cookie.split(';').some((item) => item.includes('lang=en'))) {
    document.getElementById("language").value = "en";
    document.getElementById("title").innerHTML = "About me";
    document.getElementById("who").innerHTML = "Who am I?";
    document.getElementById("descr").innerHTML = "Hey, I'm KevFR! I'm a fan of computers and video games. I make videos about the game Progressbar 95 and tutorials on how to instal certain OSs. Don't hesitate to contact me about this!";
} else if (document.cookie.split(';').some((item) => item.includes('lang=fr'))) {
    document.getElementById("title").innerHTML = "A propos de moi";
    document.getElementById("who").innerHTML = "Qui je suis ?";
    document.getElementById("descr").innerHTML = "Hey je suis KevFR ! Je suis un passoné d'informatique et de jeux-vidéos ! Je fais des vidéos sur le jeu Progressbar95 et des tutoriels sur comment installer un OS en particulier ou simplement une simple vidéo ! N'hésite pas à me regoindresur ce je te laisse !  ";
}
}
function langSwitch() {
    var langId = document.getElementById("language").value;
    document.cookie = `lang=${langId};`
    if (document.cookie.split(';').some((item) => item.includes('lang=en'))) {
        document.getElementById("title").innerHTML = "About me";
        document.getElementById("who").innerHTML = "Who am I?";
        document.getElementById("descr").innerHTML = "Hey, I'm KevFR! I'm a fan of computers and video games. I make videos about the game Progressbar 95 and tutorials on how to instal certain OSs. Don't hesitate to contact me about this!";
    } else if (document.cookie.split(';').some((item) => item.includes('lang=fr'))) {
        document.getElementById("title").innerHTML = "A propos de moi";
        document.getElementById("who").innerHTML = "Qui je suis ?";
        document.getElementById("descr").innerHTML = "Hey je suis KevFR ! Je suis un passoné d'informatique et de jeux-vidéos ! Je fais des vidéos sur le jeu Progressbar95 et des tutoriels sur comment installer un OS en particulier ou simplement une simple vidéo ! N'hésite pas à me regoindresur ce je te laisse !  ";
    }
}