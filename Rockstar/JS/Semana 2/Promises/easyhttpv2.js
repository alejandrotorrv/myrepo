// function easyHTTP(){
//     this.http = new XMLHttpRequest();

// }

// easyHTTP.prototype.get = function(url, callback) {
//     this.http.open("GET", url, true);

//     self=this;
//     this.http.onload = function() {
//         if ( self.http.status === 200) {
//             callback(self.http.responseText);
//         }
//     };

//     this.http.send();
// }

// //post request
// easyHTTP.prototype.post = function(url, data, callback) {
//     this.http.open("POST", url, true);
//     this.http.setRequestHeader("Content-type", "application/json");

//     let self = this;
//     this.http.onload = function() {
//         if ( self.http.status === 200||201) {
//             callback(self.http.responseText);
//         }
//     };
//     this.http.send(JSON.stringify(data));
// }

// //put request
// easyHTTP.prototype.put = function(url, data, callback) {
//     this.http.open("PUT", url, true);
//     this.http.setRequestHeader("Content-type", "application/json");

//     let self = this;
//     this.http.onload = function() {
//         if ( self.http.status === 200) {
//             callback(self.http.responseText);
//         }
//     };
//     this.http.send(JSON.stringify(data));
// }

// easyHTTP.prototype.delete = function (url, callback) {
//     this.http.open("DELETE", url, true);

//     let self = this;
//     this.http.onload = function() {
//         if ( self.http.status === 200) {
//             callback("post deleted", null);
//         } else {
//             callback(null, `HTTP ERROR ${self.http.status}`);
//         }
//     };

//     this.http.send();
// }

class EasyHTTP{
    static get(url){
        return new Promise((resolve, reject)=>{
            fetch(url)
                .then( response => response.json())
                .then( data => resolve(data))
                .catch(error=>reject(error));

        })
    }
    static post(url, postData){
        return new Promise((resolve ,reject)=>{
            fetch(url, {
                method: "POST",
                headers: {"Content-type":"application/json"},
                body: JSON.stringify(postData)
            })
            .then ( response => response.json())
            .then ( data => resolve(data))
            .catch ( err => reject(err))
        });
    }
    static put(url, postData){
        return new Promise((resolve, reject)=>{
            fetch(url, {
                method: "PUT",
                headers: {"Content-type":"application/json"},
                body: JSON.stringify(postData)
            })
            .then( response => response.json())
            .then ( data => resolve(data))
            .catch ( err => reject(err))
        });
    }
    static delete(url){
        return new Promise((resolve, reject) =>{
            fetch(url,{
                method: "DELETE",
                headers: {"Content-type":"application/json"}
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch( err=>reject(err))
        });
    }
}