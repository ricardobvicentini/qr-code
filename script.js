const myHeading = document.querySelector('.heading')
const myText = document.querySelector('.text');
const myImage = document.querySelector('.image-container');
const myRefresh = document.querySelector('.main-container');
const myRefreshText = `<p style="color: green; cursor: pointer;">Now click here to reload</p>`;



/* function clickHandler(event) {} */

const clickHandler = () => {
    myHeading.innerHTML = "DUDE!! Don't touch it, scan it!";
    myHeading.style.color = 'orangered';
    myText.innerHTML = "I knew you'd touch it. No worries! I just wanted to show a JS function!";
    
    setTimeout(function() {
        myText.insertAdjacentHTML('beforeend', myRefreshText);
    }, 4000);

    const handleClick = () => {
        window.location.reload();
    };
    
    myText.addEventListener('click', handleClick);
}

myImage.addEventListener('click', clickHandler);
