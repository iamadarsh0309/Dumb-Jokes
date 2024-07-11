fetch('https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbWJGWGUtdTdhOXltLWo1VHoyWGhYc2lvSFNYd3xBQ3Jtc0ttR3hZQ2Nwai11N0VtRXpIRkRVRF9hRmxuRUJKQXZVLVBKbG94WGZka0RiTGtLNmY2cmFKcjJTWXR6a2o0NUJkbDcyMVVTVWdtMWdDMDhaQzBESmN2eUJ6Ukg5cTItZ05JazlYYmw2MHpfV3ZzVXk3MA&q=https%3A%2F%2Ficanhazdadjoke.com%2Fapi&v=gtF2nHVjqFk').then(data => data.json()).then(jokeData => {
    const jokeText = jokeData.attachments[0].text;
const jokeElement = document.getElementById('jokeElement')

    jokeElement.innerHTML = jokeText;

})