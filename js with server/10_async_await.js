// 10_async_await.js
// async 내부적으로는 순차적으로 처리가 되지만 밖에서는 비동기식 처리가 됨
async function getPostInfo(){
    let postList = await fetch('https://jsonplaceholder.typicode.com/posts')  //await : 첫번째 fetch가 끝날때까지 기다리라는 뜻 
                        .then(res => res.json());
    
    let postId = postList[0].id;
    let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
                    .then(res => res.json());

    let commentList = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                           .then(res => res.json());
    post.comments = commentList;
    console.log(post);
}

getPostInfo();
console.log('코드 종료');