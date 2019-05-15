class EasyHTTP{

    static async get(url){
        //Get request
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    //make an HTTP PUT request
    static async put(url, putData){
        const request = {
            method: "PUT",
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(putData)
        };

        const response = await fetch(url, request);
        const data = await response.json();
        return data;
    }

    //make an HTTP POST request
    static async post(url, putData){
        const request = {
            method: "POST",
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(putData)
        };

        const response = await fetch(url, request);
        const data = await response.json();
        return data;
    }

    static async delete(url){
        const request = {
            method: "DELETE",
            headers: {"Content-type":"application/json"},
        };
        const response = await fetch(url, request);
        const data = await response.json();
        return data;
    }
}