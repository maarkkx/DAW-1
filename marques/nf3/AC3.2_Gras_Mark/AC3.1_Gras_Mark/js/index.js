const htmlBut = document.getElementById("html");
const jsBut = document.getElementById("js");
const cssBut = document.getElementById("css");
const contentHtml = document.getElementById("contentHtml");
const contentCss = document.getElementById("contentCss");
const contentJs = document.getElementById("contentJs");

htmlBut.addEventListener("click", () => {
        contentHtml.style.display = "block";
        contentJs.style.display = "none";
        contentCss.style.display = "none";
})

jsBut.addEventListener("click", () => {
    contentHtml.style.display = "none";
    contentJs.style.display = "block";
    contentCss.style.display = "none";
})

cssBut.addEventListener("click", () => {
    contentHtml.style.display = "none";
    contentJs.style.display = "none";
    contentCss.style.display = "block";
})