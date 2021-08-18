function startIconChange() {
    var startIcon = document.getElementById('start');
    var startIconPressed = document.getElementById('start2');
    var startMenu = document.getElementById('start-menu');
    if (startIcon.style.display === "block") {
        startIcon.style.display = "none";
        startIconPressed.style.display = "block";
        startMenu.style.display = "block";
    } else {
        startIcon.style.display = "block";
        startIconPressed.style.display = "none";
        startMenu.style.display = "none";
    }
 }