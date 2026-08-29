fetch("/includes/nav.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("nav").innerHTML = data;
    });

fetch("/includes/ribbon.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("rib").innerHTML = data;
    });

fetch("/includes/ribbonAI.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("ribAI").innerHTML = data;
    });

fetch("/includes/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });

document.querySelectorAll('.enlargeable').forEach(img => {

    img.addEventListener('click', function () {

        const overlay = document.createElement('div');
        overlay.className = 'image-overlay';

        const enlarged = document.createElement('img');
        enlarged.src = this.src;

        overlay.appendChild(enlarged);

        overlay.addEventListener('click', () => {
            overlay.remove();
        });

        document.body.appendChild(overlay);

    });

});
