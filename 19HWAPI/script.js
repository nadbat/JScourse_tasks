

//Создайте разметку через JS, чтобы вывести данные из API: title, body, tags, reactions, views

fetch('https://dummyjson.com/posts')
    .then(function(response) {

    return response.json();
    })

    .then(function(data) {
        
        if (data.posts && data.posts.length > 0) {
            
            let postsContainer = document.getElementById('posts');
            
            postsContainer.innerHTML = ``;
            data.posts.forEach(function(postContent) {
                let postContainer = document.createElement("div");
                postContainer.classList.add('posts-item');
                postContainer.innerHTML = `
                    <div>
                        <h2>${postContent.title}</h2>
                        <p>${postContent.body}</p>
                        <div class="posts-footer">
                            <div class="tags">
                                <span class="tag">${postContent.tags[1]}</span>
                                <span class="tag">${postContent.tags[2]}</span>
                                <span class="tag">${postContent.tags[3]}</span>
                            </div>
                            <div class="posts-info posts-reaction">
                                <p class="posts-icon like">${postContent.reactions.likes}</p>
                                <p class="posts-icon dislike">${postContent.reactions.dislikes}</p>
                                <p class="posts-icon view">${postContent.views}</p>
                            </div>
                        </div>
                    </div>
                `; 
                postsContainer.appendChild(postContainer);
            })    
        }
    })
    
    .catch(function(error) {
        console.error('Ошибка получения данных');
    })

