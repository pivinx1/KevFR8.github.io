function cookieTheme() {
console.log(document.cookie)
if (document.cookie.split(';').some((item) => item.includes('theme=7'))) {
    document.getElementById('theme').value="7"
    document.getElementById('the-theme').href = "7-modified.css"
} else if (document.cookie.split(';').some((item) => item.includes('theme=xp'))) {
    document.getElementById('theme').value="xp"
    document.getElementById('the-theme').href = "https://unpkg.com/xp.css"
} else if (document.cookie.split(';').some((item) => item.includes('theme=98'))) {
    document.getElementById('theme').value="98"
    document.getElementById('the-theme').href = "https://unpkg.com/98.css"
}
}
function themeSwitch() {
    var themeId = document.getElementById("theme").value;
    document.cookie = `theme=${themeId}; SameSite=None; Secure;`
    if (document.cookie.split(';').some((item) => item.includes('theme=7'))) {
        document.getElementById('the-theme').href = "7-modified.css"
    } else if (document.cookie.split(';').some((item) => item.includes('theme=xp'))) {
        document.getElementById('the-theme').href = "https://unpkg.com/xp.css"
    } else if (document.cookie.split(';').some((item) => item.includes('theme=98'))) {
        document.getElementById('the-theme').href = "https://unpkg.com/98.css"
    }
}
