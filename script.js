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

document.querySelectorAll(ner('click', function () {

        const overlay = document.createElement('div');

        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.8)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.cursor = 'pointer';
        overlay.style.zIndex = '9999';

        const enlarged = document.createElement('img');

        enlarged.src = this.src;
        enlarged.style.maxWidth = '90%';
        enlarged.style.maxHeight = '90%';

        overlay.appendChild(enlarged);

        overlay.addEventListener('click', function () {
            document.body.removeChild(overlay);
        });

        document.body.appendChild(overlay);

    });

});
