const github = new GitHub();
const ui = new UI();
//Search input
const searchUser = document.getElementById("searchUser");
//Search Input event Listener
searchUser.addEventListener("keyup", e=> {
    //Get input text
    const userText = e.target.value;
    //Validates that userText is NOT BLANK!
    if (userText !== ""){
        //Make HTTP CALL
        github.getUser(userText).then(data =>{
            if(data.profile.message==="Not Found"){
                //Show alert - in a Next Lesson
                ui.showAlert("One alert", "alert alert-danger");
            } else {
                console.log(data);
                ui.showProfile(data.profile);
                ui.showRepos(data.repo);
            }
        });
    } else {
        //Clear profile - in a Next Lesson
        ui.clearProfile();
    }
});

