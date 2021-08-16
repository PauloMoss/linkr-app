import axios from 'axios';

export function loadMorePosts(arrayOfPosts, setArrayOfPosts, setMorePostsToLoad, url, config) {
    
    if(!url) {
        setMorePostsToLoad(false);
        return;
    }
   
    if(arrayOfPosts && arrayOfPosts.length === 0) {
        setMorePostsToLoad(false)
        return;
    }
    
    const request = axios.get( url, config );
    request.then(response => {
        const morePosts = response.data.posts;
        if( morePosts && morePosts.length > 0){
            setArrayOfPosts([...arrayOfPosts, ...response.data.posts])
        } else {
            setMorePostsToLoad(false)
        }
    });
}

export function loadComments(url, setArrayOfComments, config) {

    const request = axios.get(url, config);
    request.then(response => {
        setArrayOfComments(response.data.comments);
    });
    request.catch(() => alert("Erro ao carregar comentários"));
}

export function callServer(setArrayOfPosts, url, erroAlert, config) {

    const request = axios.get(url, config);
    request.then(response => {
        setArrayOfPosts(response.data.posts)
    });
    request.catch(erro => alert(erroAlert))
}

//Melhorar Performace
export function reloadPosts(arrayOfPosts, setArrayOfPosts, url, erroAlert, config) {
    if(!arrayOfPosts || arrayOfPosts.length === 0) return;
    const request = axios.get(url, config);
    request.then(response => {
        const newPosts = [];
        (response.data.posts.forEach(p => {
            if(!arrayOfPosts.find(a => a.id === p.id)){
                newPosts.push(p)
            }
        }))
        setArrayOfPosts([...newPosts, ...arrayOfPosts])
    });
    request.catch(erro => alert(erroAlert));
}

export function getUserFollowers(setArrayOfPosts, url, erroAlert, config) {

    const request = axios.get(url, config);
    request.then(response => {
        setArrayOfPosts(response.data.users)
    });
    request.catch(erro => alert(erroAlert))
}