class books{
    constructor(a,b){
    }
    static btn(){
        //Getting value of inputs
        event.preventDefault();
        const [_x,_y,_z]=[  document.getElementById("title"),
                            document.getElementById("author"),
                            document.getElementById("isbn")
                        ]
        
        let x = _x.value;
        let y = _y.value;
        let z = _z.value;
        let body = document.getElementById("book-list");

        //Cheack if there's no duplicates
        if(!document.getElementById(x+y+z)){
            
            //Create tr
            let tr=document.createElement("tr");
            tr.id=x+y+z;
            //Append tr
            body.appendChild(tr);
            let mytr=document.getElementById(x+y+z);

            //Add text to td
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
            
            //Clear inputs
            _x.value="";
            _y.value="";
            _z.value="";
        }else{
            alert("Already Exists");
        }
    }
}