fetch("/includes/nav.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("nav").innerHTML = data;
    });

fetch("/includes/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });
