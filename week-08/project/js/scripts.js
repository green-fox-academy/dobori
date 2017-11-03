function getPosts ( callback ) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET','http://secure-reddit.herokuapp.com/simple/posts');
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
            let posts = JSON.parse(xhr.responseText)
            console.log(posts);
            callback(posts);
        }
    }
    xhr.send()
}

function showPosts(postsData) {
    
    let allPosts = document.getElementById('all_posts');

    for (let i = 0; i < postsData.posts.length; i++) {
        
        let oneArticle = document.createElement('article');
            oneArticle.setAttribute('class', 'posts');
            oneArticle.setAttribute('id', i);
            allPosts.appendChild(oneArticle);

        let arrowBlock = document.createElement('div');
            arrowBlock.setAttribute('class', 'arrows');
            oneArticle.appendChild(arrowBlock);
            
        let upArrow = document.createElement('div');
            upArrow.setAttribute('class', 'arrowupvote');
            arrowBlock.appendChild(upArrow);

        let vote = document.createElement('div');
            vote.setAttribute('class', 'votednumbers');
            vote.innerText = postsData.posts[i].score;
            arrowBlock.appendChild(vote);

        let downArrow = document.createElement('div');
            downArrow.setAttribute('class', 'arrowdownvote');
            arrowBlock.appendChild(downArrow);

        let section = document.createElement('section');
            oneArticle.appendChild(section);
        
        let link = document.createElement('a');
            link.innerHTML += postsData.posts[i].title;
            link.setAttribute('href', postsData.posts[i].url);
            section.appendChild(link);

        let p = document.createElement('p');
            p.setAttribute('class', 'tagline');
            p.innerText = 'submitted on ' + postsData.posts[i].timestamp + ' by ' + postsData.posts[i].user;
            section.appendChild(p);

        let modify = document.createElement('a');
            modify.innerHTML += 'modify';
            modify.setAttribute('class', 'small_a');
            section.appendChild(modify);
        
        let remove = document.createElement('a');
            remove.innerHTML += 'remove';
            remove.setAttribute('class', 'small_a');
            section.appendChild(remove);
        

    //     

    //     // let div = document.createElement('div');
    //     // let h1 = document.createElement('h1');
        
    //     // let p2 = document.createElement('p');



    //     //votedNum.innerText= postsData.posts[i].score;
    //     
        
        
    //     // h1.innerText += newsData.response.docs[i].headline.main;
    //     // newDate = newsData.response.docs[i].pub_date;
    //     // p2.innerHTML += newDate.substr(0, 9);
    //     allPosts.appendChild(oneArticle);
    //     oneArticle.appendChild(link);
        

        // main.appendChild(div);       
        // div.appendChild(h1);
        // div.appendChild(p);
        // div.appendChild(p2);
        
        
    }
}

//dateTime.toISOString();

getPosts( showPosts);