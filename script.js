document.getElementById("ImageRedirectHomeTWD").addEventListener("click", function() {
    window.location.href = "favorites.html#ImageRedirectFavoritesTWD";
});


const modeButton = document.getElementById("modeButton");

if (localStorage.getItem("mode") === "light") {
    document.body.classList.add("light-mode");
    modeButton.textContent = "Dark Mode";
}

modeButton.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("mode", "light");
        modeButton.textContent = "Dark Mode";
    } else {
        localStorage.setItem("mode", "dark");
        modeButton.textContent = "Light Mode";
    }
});
