class books{
    constructor(){
    }
    static search(val){
        return document.getElementById(val);
    }
    static create(elem){
        return document.createElement(elem);
    }
    static btn(){
        //Getting value of inputs
        event.preventDefault();
        let x=this.id("title").value;
        let y=this.id("author").value;
        let z=this.id("isbn").value;
        let body = this.id("book-list");
        //Check if there's no duplicates
        if(!this.id(x+y+z)){
            //Create tr
            let tr=document.createElement("tr");
            tr.id=x+y+z;

            //Append tr
            body.appendChild(tr);
            let mytr=document.getElementById(x);

            //Bind text of inputs
            let td1 = document.createElement("td");
            td1.innerText=x;
            let td2 = document.createElement("td");
            td2.innerText=y;
            let td3 = document.createElement("td");
            td3.innerText=z;

            //Add tr to tbody
            mytr.appendChild(td1);
            mytr.appendChild(td2);
            mytr.appendChild(td3);

            x="";
            y="";
            z="";
        } else{
            alert("Already Exists");
        }
    }
}