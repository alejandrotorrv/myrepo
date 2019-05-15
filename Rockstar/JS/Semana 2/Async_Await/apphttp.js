//const http = new EasyHTTP();
// GET Users
const url ="https://jsonplaceholder.typicode.com/users/";
const userData={
    id: "9911",
    username: "alanV",
    name: "Alan Villarreal",
    email: "alan@correo.com"
};

// EasyHTTP.get(url)
//     .then(users => console.log(users))
//     .catch(err => console.log(err))

// EasyHTTP.put(url, userData)
//     .then(users => console.log(users))
//     .catch(err => console.log(err))

EasyHTTP.post(url, userData)
.then(users => console.log(users))
.catch(err => console.log(err))

// EasyHTTP.delete(url)
//      .then(users => console.log(users))
//      .catch(err => console.log(err))
