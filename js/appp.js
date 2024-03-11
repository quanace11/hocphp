var commentss= 
[{
    id:1,
    user_id:1,
    comment: "vua ra"
},{
    id:2,
    user_id:2,
    comment: "vua ra xong"
},{
    id:3,
    user_id:2,
    comment: "vua ra xong banoi"
}]
;
var user= 
[{
    id:1,
    name: "quan"
},{
    id:2,
    name: "hung"
}

,{
    id:3,
    name: "nam"
}]
function getUsersByIds(userIds){
    return new Promise((resolve) => {
        var result = user.filter(function(user){
            console.log(userIds.includes(user.id),"mang moi");
       
            return userIds.includes(user.id);                    
        });
        resolve(result);
        
    })
}

function getComment(){
    return new Promise(function(resolve)
    {
            resolve(commentss);
    })
}
getComment()
    .then(function(comment)
    {
        var userID= comment.map(function(index){
        return index.user_id;
        });
        return getUsersByIds(userID)
        .then(function(users){
          return {
            users:users,
            comments:comment,
          }  
        })
    })
.then(function(data){
    var commentblock = document.getElementById('comment-block');
    var html = '';
    data.comments.forEach(function(comment){
        console.log(comment)
        var user= data.users.find(function(user){
            return user.id===comment.user_id;
        });
        html+= user.name +" "+ comment.comment+'</br>'  ;
    
    });
    commentblock.innerHTML=html;
});
 
var postApi = 'https://jsonplaceholder.typicode.com/posts';
fetch(postApi)
.then(function(response){
 
    return response.json();
})
.then(function(posts)
{
    console.log(posts);
    var render = document.getElementById('block');
    // var html='';
    // posts.forEach(function(user){
    //     console.log(user.id +" "+ user.title);
    //     html+=user.id +" "+ user.title + '</br>';
    // });
    // render.innerHTML=html;
    var htmls= posts.map(function(post){
        return `<li> 
            <h2> ${post.title}</h2>
            <p>${post.body}</p>
        </li>`;
    });
    console.log(typeof htmls);
    console.log(typeof htmls.join(''))
    var html=htmls.join('');
    render.innerHTML=html;
})
var courseApi ='http://localhost:3000/posts';
fetch(courseApi)
.then(function(response)
{
    return response.json();
})
.then(function(course)
    {
        console.log(course);
    })

// function getComment(){
//     return new Promise(function(resolve)
//     {
//         resolve(commentss);
//     })
// }
// getComment()
//     .then(function(comment)
//     {
//         var userID= comment.map(function(index){
//             return index.user_id;
            
//         })
//     })
//    .then(function(userID){
//     var users= user.filter(function(index){
//                 console.log('dieu kien', userID.includes(index.id));
               
//                 if((userID.includes(index.id))==true)
//                 {
//                   console.log(index)
//                  return index;
//                 }
               
//         });
//         console.log(users,"result");
// })
// .then(function(users){
//     console.log()
// })
    

// function getComment()
// {
   
//     var user_ids=commentss.map(function(index){

//        return index.user_id ;
    
//     })
//     return user_ids
// }
// function getById(user_ids){
//     var userNeed=[];
//     console.log("userneed khi chua gan",userNeed)
//     for (const key in user_ids) {
//         console.log(key);
//         user.filter(function(indexId)
//             {
//                 if(indexId.id==user_ids[key]){
//                     console.log(indexId.id);
//                     console.log(user_ids[key])
//                     userNeed=userNeed.concat(indexId);
//                     console.log("khi user da gan", userNeed)
//                  };
//             });
//     }
    
    
//     console.log(userNeed);
// }
// function getUse(thamso1){

// }


// getById(getComment());
