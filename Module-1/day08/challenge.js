function getDataPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })
    .catch((error) => {
        console.log(error);
    });  
}

// getDataPosts();

/* Async Await */

async function getDataPostV1(){
    try {
        const response1 = await fetch('https://jsonplaceholder.typicode.com/posts');
        const response2 = await fetch('https://jsonplaceholder.typicode.com/comments');

        const data = await response1.json();
    } catch (error) {
        console.log(error);
    }
}

getDataPostV1();