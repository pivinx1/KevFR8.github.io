function cookieLang() {
    console.log(document.cookie)
    if (document.cookie.split(';').some((item) => item.includes('lang=en'))) {
        document.getElementById("welcome").innerHTML = "Welcome to FireWave!";
        document.getElementById("computer_fan").innerHTML = "Are you a fan of computers? This site lets you download my packs and much more!<br/> Don't hesitate to contact me in case of problems!";
        document.getElementById("current_video").innerHTML = "Latest video";
        document.getElementById("help").innerHTML = "Help develop the site!";
        document.getElementById("shut").innerHTML = "Shut Down";
        document.getElementById("corrections").innerHTML = "Fixed a problem with the background when zooming out!";
        document.getElementById("javascript").innerHTML = "Javascript test";
        document.getElementById("changelog").innerHTML = "Added the changelog";
        document.getElementById("kevcoorp").innerHTML = "Removed \"KevCoorp\" in Contact Me";
        document.getElementById("version").innerHTML = "Removed the version of the website in About me";
        document.getElementById("navigation").innerHTML = "Changed the style of the navigation bar";
        document.getElementById("background").innerHTML = "The changelog's background is now grey.";
        document.getElementById("navigation2").innerHTML = "Changed the navigation bar's colour to translucent green.";
        document.getElementById("myself").innerHTML = "The presentation of myself has been changed.";
        document.getElementById("kevcoorp2").innerHTML = "\"KevCoorp\" is now placed below the site build.";
        document.getElementById("99").innerHTML = "Build 99 Translation Update";
        document.getElementById("english").innerHTML = "English translation of the site";
        document.getElementById("design").innerHTML = "Some design changes";
        document.getElementById("comingsoon").innerHTML = "<b>More updates are planned in the future.</b>";
        document.getElementById("99.1").innerHTML = "Build 99.1 Minor update";
        document.getElementById("navigation3").innerHTML = "Removed the underlined text";
        document.getElementById("correction2").innerHTML = "Fixed a translation problem";
        document.getElementById("100").innerHTML = "Build 100 - Website Redesign";
        document.getElementById("ui").innerHTML = "Build 100 brings a new visual interface!";
        document.getElementById("fix2").innerHTML = "Most issues have been fixed";
        document.getElementById("titre").innerHTML = "Changed the style of the title of index.html";
        document.getElementById("fix3").innerHTML = "Fixed some problems on the navigation bar";
        document.getElementById("navigation4").innerHTML  = "Several changes on the navigation bar";
        document.getElementById("fix4").innerHTML = "Fixed some minor problems";
        document.getElementById("navbar1").innerHTML = "Minor changes on the build and navigation bar";
        document.getElementById("ui2").innerHTML = "Major changes in some features";
        document.getElementById("windows7pack").innerHTML = "Windows 7 pack";
        document.getElementById("about").innerHTML = "About me";
        document.getElementById("contact").innerHTML = "Contact me";
        document.getElementById("credits").innerHTML = "Credits";
    } else if (document.cookie.split(';').some((item) => item.includes('lang=fr'))) {
        document.getElementById("welcome").innerHTML = "Bienvenue sur FireWave !";
        document.getElementById("computer_fan").innerHTML = "Fan de l'informatique ? Ce site vous permet de découvrir mes packs et bien plus encore !<br/>N'hésitez pas à me contactez en cas de problèmes !";
        document.getElementById("current_video").innerHTML = "La vidéo du moment !";
        document.getElementById("help").innerHTML = "Aidez à développer ce site !";
        document.getElementById("shut").innerHTML = "Fermer";
        document.getElementById("corrections").innerHTML = "Corrections d'un problème de fond-d'écran lorsqu'on dé-zoome";
        document.getElementById("javascript").innerHTML = "Test de Javascript (Dans le code uniquement)";
        document.getElementById("changelog").innerHTML = "Ajout d'une catégorie \"Changelog\"";
        document.getElementById("kevcoorp").innerHTML = "Suppresion de \"KevCoorp\" dans la section \"Me contactez\"";
        document.getElementById("version").innerHTML = "Suppresion de la version du site dans la section \"A propos\"";
        document.getElementById("navigation").innerHTML = "Changement du style de la barre de navigation.";
        document.getElementById("background").innerHTML = "Le Background utilisé dans le changelog a était remplaçé par un fond gris.";
        document.getElementById("navigation2").innerHTML = "La Barre de navigation change encore une fois de couleur pour passer au vert transparent.";
        document.getElementById("myself").innerHTML = "La présentation de moi-meme à était changé.";
        document.getElementById("kevcoorp2").innerHTML = "L'emplacement de \"KevCoorp\" ce trouve en dessous des builds du site.";
        document.getElementById("99").innerHTML = "Build 99 Traduction Update";
        document.getElementById("english").innerHTML = "Traduction en anglais du site";
        document.getElementById("design").innerHTML = "Quelques changements de conception";
        document.getElementById("comingsoon").innerHTML = "<b>D'autres Builds sont prévus prochainnement.</b>";
        document.getElementById("99.1").innerHTML = "Mise à jour mineure Build 99.1";
        document.getElementById("navigation3").innerHTML = "Le texte souligné en rouge à était supprimét";
        document.getElementById("correction2").innerHTML = "Correction d'un problème de traduction";
        document.getElementById("100").innerHTML = "Refonte du site - Build 100";
        document.getElementById("ui").innerHTML = "Le Build 100, apporte notamment une nouvelle interface visuel !";
        document.getElementById("fix2").innerHTML = "La plupart des problèmes ont étaient corrigés";
        document.getElementById("titre").innerHTML = "Changement du style du titre de la page \"index.html\"";
        document.getElementById("fix3").innerHTML = "Correctif d'un problème sur la navbar.";
        document.getElementById("navigation4").innerHTML = "Plusieurs changement ont étaient effectués sur la barre de navigation.";
        document.getElementById("fix4").innerHTML =  "Correction de problèmes mineures.";
        document.getElementById("navbar1").innerHTML = "Modification mineure sur le build et la barre de navigation.";
        document.getElementById("ui2").innerHTML = "Changement majeure de certains fonctionnalité";
        document.getElementById("windows7pack").innerHTML = "Pack Windows 7";
        document.getElementById("about").innerHTML = "A propos de moi";
        document.getElementById("contact").innerHTML = "Me Contactez";
        document.getElementById("credits").innerHTML = "Crédits";
    }
    }
    function langSwitch() {
        var langId = document.getElementById("language").value;
        document.cookie = `lang=${langId}; SameSite=None; Secure;`
        if (document.cookie.split(';').some((item) => item.includes('lang=en'))) {
            document.getElementById("welcome").innerHTML = "Welcome to FireWave!";
            document.getElementById("computer_fan").innerHTML = "Are you a fan of computers? This site lets you download my packs and much more!<br/> Don't hesitate to contact me in case of problems!";
            document.getElementById("current_video").innerHTML = "Latest video";
            document.getElementById("help").innerHTML = "Help develop the site!";
            document.getElementById("shut").innerHTML = "Shut Down";
            document.getElementById("corrections").innerHTML = "Fixed a problem with the background when zooming out!";
            document.getElementById("javascript").innerHTML = "Javascript test";
            document.getElementById("changelog").innerHTML = "Added the changelog";
            document.getElementById("kevcoorp").innerHTML = "Removed \"KevCoorp\" in Contact Me";
            document.getElementById("version").innerHTML = "Removed the version of the website in About me";
            document.getElementById("navigation").innerHTML = "Changed the style of the navigation bar";
            document.getElementById("background").innerHTML = "The changelog's background is now grey.";
            document.getElementById("navigation2").innerHTML = "Changed the navigation bar's colour to translucent green.";
            document.getElementById("myself").innerHTML = "The presentation of myself has been changed.";
            document.getElementById("kevcoorp2").innerHTML = "\"KevCoorp\" is now placed below the site build.";
            document.getElementById("99").innerHTML = "Build 99 Translation Update";
            document.getElementById("english").innerHTML = "English translation of the site";
            document.getElementById("design").innerHTML = "Some design changes";
            document.getElementById("comingsoon").innerHTML = "<b>More updates are planned in the future.</b>";
            document.getElementById("99.1").innerHTML = "Build 99.1 Minor update";
            document.getElementById("navigation3").innerHTML = "Removed the underlined text";
            document.getElementById("correction2").innerHTML = "Fixed a translation problem";
            document.getElementById("100").innerHTML = "Build 100 - Website Redesign";
            document.getElementById("ui").innerHTML = "Build 100 brings a new visual interface!";
            document.getElementById("fix2").innerHTML = "Most issues have been fixed";
            document.getElementById("titre").innerHTML = "Changed the style of the title of index.html";
            document.getElementById("fix3").innerHTML = "Fixed some problems on the navigation bar";
            document.getElementById("navigation4").innerHTML  = "Several changes on the navigation bar";
            document.getElementById("fix4").innerHTML = "Fixed some minor problems";
            document.getElementById("navbar1").innerHTML = "Minor changes on the build and navigation bar";
            document.getElementById("ui2").innerHTML = "Major changes in some features";
            document.getElementById("windows7pack").innerHTML = "Windows 7 pack";
            document.getElementById("about").innerHTML = "About me";
            document.getElementById("contact").innerHTML = "Contact me";
            document.getElementById("credits").innerHTML = "Credits";
        } else if (document.cookie.split(';').some((item) => item.includes('lang=fr'))) {
            document.getElementById("welcome").innerHTML = "Bienvenue sur FireWave !";
            document.getElementById("computer_fan").innerHTML = "Fan de l'informatique ? Ce site vous permet de découvrir mes packs et bien plus encore !<br/>N'hésitez pas à me contactez en cas de problèmes !";
            document.getElementById("current_video").innerHTML = "La vidéo du moment !";
            document.getElementById("help").innerHTML = "Aidez à développer ce site !";
            document.getElementById("shut").innerHTML = "Fermer";
            document.getElementById("corrections").innerHTML = "Corrections d'un problème de fond-d'écran lorsqu'on dé-zoome";
            document.getElementById("javascript").innerHTML = "Test de Javascript (Dans le code uniquement)";
            document.getElementById("changelog").innerHTML = "Ajout d'une catégorie \"Changelog\"";
            document.getElementById("kevcoorp").innerHTML = "Suppresion de \"KevCoorp\" dans la section \"Me contactez\"";
            document.getElementById("version").innerHTML = "Suppresion de la version du site dans la section \"A propos\"";
            document.getElementById("navigation").innerHTML = "Changement du style de la barre de navigation.";
            document.getElementById("background").innerHTML = "Le Background utilisé dans le changelog a était remplaçé par un fond gris.";
            document.getElementById("navigation2").innerHTML = "La Barre de navigation change encore une fois de couleur pour passer au vert transparent.";
            document.getElementById("myself").innerHTML = "La présentation de moi-meme à était changé.";
            document.getElementById("kevcoorp2").innerHTML = "L'emplacement de \"KevCoorp\" ce trouve en dessous des builds du site.";
            document.getElementById("99").innerHTML = "Build 99 Traduction Update";
            document.getElementById("english").innerHTML = "Traduction en anglais du site";
            document.getElementById("design").innerHTML = "Quelques changements de conception";
            document.getElementById("comingsoon").innerHTML = "<b>D'autres Builds sont prévus prochainnement.</b>";
            document.getElementById("99.1").innerHTML = "Mise à jour mineure Build 99.1";
            document.getElementById("navigation3").innerHTML = "Le texte souligné en rouge à était supprimét";
            document.getElementById("correction2").innerHTML = "Correction d'un problème de traduction";
            document.getElementById("100").innerHTML = "Refonte du site - Build 100";
            document.getElementById("ui").innerHTML = "Le Build 100, apporte notamment une nouvelle interface visuel !";
            document.getElementById("fix2").innerHTML = "La plupart des problèmes ont étaient corrigés";
            document.getElementById("titre").innerHTML = "Changement du style du titre de la page \"index.html\"";
            document.getElementById("fix3").innerHTML = "Correctif d'un problème sur la navbar.";
            document.getElementById("navigation4").innerHTML = "Plusieurs changement ont étaient effectués sur la barre de navigation.";
            document.getElementById("fix4").innerHTML =  "Correction de problèmes mineures.";
            document.getElementById("navbar1").innerHTML = "Modification mineure sur le build et la barre de navigation.";
            document.getElementById("ui2").innerHTML = "Changement majeure de certains fonctionnalité";
            document.getElementById("windows7pack").innerHTML = "Pack Windows 7";
            document.getElementById("about").innerHTML = "A propos de moi";
            document.getElementById("contact").innerHTML = "Me Contactez";
            document.getElementById("credits").innerHTML = "Crédits";
        }
    }