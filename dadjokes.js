const url = 'https://icanhazdadjoke.com';
const textContainer = document.querySelector('.text-container');
const jokeBtn = document.querySelector('button');

const fetchJokes = async () => {
	const response = await fetch(url, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
		},
	});

	const JokesData = await response.json();

	textContainer.innerHTML = `${JokesData.joke}`;
};

jokeBtn.addEventListener('click', fetchJokes);
