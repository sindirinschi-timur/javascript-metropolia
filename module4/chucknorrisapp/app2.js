document.getElementById('joke-search-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = document.getElementById('joke-query').value.trim();
    const resultsDiv = document.getElementById('joke-results');
    resultsDiv.innerHTML = '';

    if (!query) return;

    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(query)}`);
        const data = await response.json();

        data.result.forEach(joke => {
            const article = document.createElement('article');
            const jokeParagraph = document.createElement('p');
            jokeParagraph.textContent = joke.value;

            article.appendChild(jokeParagraph);
            resultsDiv.appendChild(article);
        });
    } catch (error) {
        console.error('Error', error);
    }
});
