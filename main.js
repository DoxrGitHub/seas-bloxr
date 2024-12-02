document.addEventListener('DOMContentLoaded', function() {
    const siteData = window.siteData;
    const container = document.querySelector('main');

    Object.keys(siteData).forEach(key => {

        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        h2.textContent = siteData[key].title;
        article.appendChild(h2);

        const p = document.createElement('p');
        p.textContent = siteData[key].preview;
        article.appendChild(p);

        article.onclick = function() {
            window.location.href = "posts/" + siteData[key].index; 
        };

        container.appendChild(article);
    });
});
