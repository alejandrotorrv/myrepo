//Use easyHTTP library
const http = new easyHTTP();
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

url = "https://jsonplaceholder.typicode.com/posts/";
const data = {
        title: "this is a nice post",
        body: "this is a nice body"
    };
    http.post(url, data, function(result, error){
            if (error) {
                console.log(error);
            } else {
                console.log(result);
            }
        });