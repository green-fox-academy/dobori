function getNews ( callback ) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=1fc7a7dbfaee49a7b9012a13b9bee39b&begin_date=19690719&end_date=19690720');
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
            let news = JSON.parse(xhr.responseText)
            console.log(news)
            callback( news );
        }
    }
    xhr.send()
}

function showNews(newsData) {
    let main = document.querySelector('main');
     for (let i = 0; i < newsData.response.docs.length; i++) {
        let div = document.createElement('div');
        let h1 = document.createElement('h1');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let link = document.createElement('a');

        h1.innerText += newsData.response.docs[i].headline.main;
        p.innerText += newsData.response.docs[i].snippet;
        newDate = newsData.response.docs[i].pub_date;
        p2.innerHTML += newDate.substr(0, 9);
        link.setAttribute('href', newsData.response.docs[i].web_url);
        link.innerHTML += newsData.response.docs[i].web_url;

        main.appendChild(div);       
        div.appendChild(h1);
        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(link);
    }
}

getNews( showNews);