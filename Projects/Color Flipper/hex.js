const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn2 = document.getElementById('btn');
const color2 = document.querySelector('.color');

btn2.addEventListener('click', function() {
    let hexColor = '#'
    for (let i = 0; i < 6; i++){
        hexColor += hex[getRandomNum2()];
    }
    color2.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});


function getRandomNum2() {
    return Math.floor(Math.random() * hex.length);
}