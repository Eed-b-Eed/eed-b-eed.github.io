function showArabicOnly() {
    document.querySelectorAll('.dialogue-line').forEach(line => {
        line.classList.remove('below', 'side-by-side');
    });
}

function showBelow() {
    document.querySelectorAll('.dialogue-line').forEach(line => {
        line.classList.remove('side-by-side');
        line.classList.add('below');
    });
}

function showSideBySide() {
    document.querySelectorAll('.dialogue-line').forEach(line => {
        line.classList.remove('below');
        line.classList.add('side-by-side');
    });
}

const dialogue = [
    ["AR", "ENG"],
    ["AR", "ENG"],
    ["AR", "ENG"]
];

const container = document.getElementById("dialogue");

dialogue.forEach(([ar, en]) => {
    container.innerHTML += `
        <div class="dialogue-line">
            <div class="arabic">${ar}</div>
            <div class="english">${en}</div>
        </div>
    `;
});
