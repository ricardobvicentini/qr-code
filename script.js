const myHeading = document.querySelector('.heading')
const myText = document.querySelector('.text');
const myImage = document.querySelector('.image-container');
const myRefresh = `<p style="color: green;">Now click here to reload</p>`;


/* function clickHandler(event) {} */

const clickHandler = () => {
    myHeading.innerHTML = "DUDE!! Don't touch it, scan it!";
    myHeading.style.color = 'orangered';
    myText.innerHTML = "I knew you'd touch it. No worries! I just wanted to show a JS function!";
    myText.insertAdjacentHTML('beforeend', myRefresh);
}

myImage.addEventListener('click', clickHandler);

const handleClick = () => {
    window.location.reload();
}

myRefresh.addEventListener('click', handleClick);