let joke = document.querySelector('#joke');
let btn = document.querySelector('#btn');

const generatejokes = () => {
    fetch("https://icanhazdadjoke.com/slack")
        .then((data) => data.json())
        .then(jokedata => {
            let joketext = jokedata.attachments[0].text;
            joke.innerHTML = joketext
        })
}

generatejokes();
btn.addEventListener('click', generatejokes);