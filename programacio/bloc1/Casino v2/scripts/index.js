const img = document.getElementById("titulo")
const iframe = document.getElementById("navegacion")
const content = document.getElementById("content")
const nav = document.getElementById("nav")

nav.addEventListener("click", () => {
    if (iframe.contentDocument || iframe.contentWindow.document) {
        content.style.height = "100vh";
        content.style.width = "100vw";
        img.style.opacity = "0";
        img.style.height = "0";
        nav.style.opacity = "0";
        nav.style.width = "0";
        setTimeout(() => {
            img.style.display = "none"; 
            nav.style.display = "none";
        }, 500);
    }
})