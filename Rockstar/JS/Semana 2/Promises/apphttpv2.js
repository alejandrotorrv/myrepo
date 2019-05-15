//Use easyHTTP library
// const http = new easyHTTP();
// url = "https://jsonplaceholder.typicode.com/posts";

// //Get posts 
// const response=http.get(url, function(response){
//     console.log(response);
// });

// url = "https://jsonplaceholder.typicode.com/posts/5";
// const data = {
//     title: "this is a nice post",
//     body: "this is a nice body"
// };
// http.put(url, data, function(result, error){
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(result);
//     }
// });

// url = "https://jsonplaceholder.typicode.com/posts/1";
// http.delete(url, function (response, error){
//     if (error){
//         console.log(error);
//     } else {
//         console.log(response);
//     }
// });

// url = "https://jsonplaceholder.typicode.com/posts/";
// const data = {
//         title: "this is a nice post",
//         body: "this is a nice body"
//     };
//     http.post(url, data, function(result, error){
//             if (error) {
//                 console.log(error);
//             } else {
//                 console.log(result);
//             }
//         });

const url = "https://jsonplaceholder.typicode.com/users/";
const url2 = "https://jsonplaceholder.typicode.com/users/2";

// //get request
// EasyHTTP.get(url)
//     .then(users=>console.log(users))
//     .catch(error => console.log(error));


const userData={
    id: "9911",
    username: "alanV",
    name: "Alan Villarreal",
    email: "alan@correo.com"
};

//post request
// EasyHTTP.post(url, userData)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

//put request
// EasyHTTP.put(url2, userData)
//  .then(data=> console.log(data))
//  .catch(err=>console.log(err));

 EasyHTTP.delete(url2)
 .then(data=>console.log(data))
 .catch(err=>console.log(err));