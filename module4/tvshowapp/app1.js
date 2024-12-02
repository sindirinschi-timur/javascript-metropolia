document.getElementById('search-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = document.getElementById('query').value.trim();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (!query) return;

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
        const data = await response.json();

        data.forEach(tvShow => {
            const { name, url, image, summary } = tvShow.show;

            const article = document.createElement('article');

            const title = document.createElement('h2');
            title.textContent = name;

            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.textContent = 'Details';

            const img = document.createElement('img');
            img.src = image?.medium || 'https://via.placeholder.com/210x295?text=Not%20Found';
            img.alt = name;

            const summaryDiv = document.createElement('div');
            summaryDiv.innerHTML = summary || 'Summary Unavailable.';

            article.append(title, link, img, summaryDiv);
            resultsDiv.appendChild(article);
        });
    } catch (error) {
        console.error('Error', error);
    }
});
