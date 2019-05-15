class UI {
    static clearAlert(){
        const currentAlert = document.querySelector(".alert");
        if(currentAlert) {
            currentAlert.remove();
        }
    }
    static showAlert(message, className) {
        //Clear any remaining alerts
        this.clearAlert();
        //Create Div
        const div= document.createElement("div");
        //Add Classes
        div.className = className;
        //add text
        div.appendChild(document.createTextNode(message));
        //Get parent
        const container = document.querySelector(".searchContainer");
        //Get search box
        const search = document.querySelector(".search");
        //Insert alerts
        container.insertBefore(div, search);

        //Set timeout after 3 secs
        setTimeout(()=>{
            this.clearAlert()
        }, 3000);
    }
    static showBooks(x=false, y=false, z=false, someId=false){
        if(x==0||y==0||z==0){
            this.showAlert("Missing spaces", "alert alert-warning")
        } else {
            const body = document.getElementById("book-list");
            body.innerHTML += `
            <tr id="${someId}">
                <td>${x}</td>
                <td>${y}</td>
                <td>${z}</td>
                <td><a href="#" onclick="books.delete('${someId}')">X</a></td>
            </tr>
            `;
            this.showAlert("Successfully Added", "alert alert-success");
        }
    }
    static delete(someId){
        let x = document.getElementById(someId);
        x.remove();
        this.showAlert("Book Deleted", "alert alert-info")
    }
}

class books{
    static btn(){
        event.preventDefault();
        const {_x, _y, _z}={
            _x:document.getElementById("title"),
            _y:document.getElementById("author"),
            _z:document.getElementById("isbn")
        };
        let [x,y,z]=[_x.value,_y.value,_z.value];
        const someId=x+y+z;
        if(!document.getElementById(x+y+z)){
            UI.showBooks(x,y,z,someId);
        }else{
            UI.showAlert("Already exists", "alert alert-danger");
        }
        _x.value="";
        _y.value="";
        _z.value="";
    }
    
}

