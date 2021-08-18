function startIconChange() {
    var startIcon = document.getElementById('start');
    var startIconPressed = document.getElementById('start2');
    if (startIcon.style.display === "block") {
        startIcon.style.display = "none";
        startIconPressed.style.display = "block";
    } else {
        startIcon.style.display = "block";
        startIconPressed.style.display = "none";
    }
 }