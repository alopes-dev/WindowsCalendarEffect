// ...and a tiny bit of js
const light = document.getElementById('light');
document.addEventListener('mousemove', (e) => {
    light.style.top = e.pageY + 'px';
    light.style.left = e.pageX + 'px';
});

//themes
const themes = document.querySelectorAll('.themes li');
for (i = 0; i < themes.length; ++i) {
    themes[i].addEventListener('click', (e) => {
        document.documentElement.classList = [e.target.classList.value];
    });
}