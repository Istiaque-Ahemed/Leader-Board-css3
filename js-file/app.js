document.getElementById('section-title').style.color = 'red';
document.getElementById('blog-title').style.color = 'gray';
document.getElementById('players-area').style.backgroundColor = "rgba(255, 99, 71, 0.2)";

document.getElementById("btn-click").addEventListener('click', function () {
    const newIist = document.createElement('li');
    newIist.innerText = '"kaj hoica     "';

    const underIist = document.getElementById('unoder-list');
    underIist.appendChild(newIist);
})
document.getElementById('btn-plus').addEventListener('click', function () {
    const bt = document.getElementById('btn-plus');
    const inputField = document.getElementById('input');
    const inputValue = parseInt(inputField.value);
    console.log(inputValue);
    const add = inputValue + 1;

    inputField.value = add;
    if (inputField.value == 5) {
        bt.disabled = true;
        bt.style.backgroundColor='gray';
    }
})