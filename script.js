/*
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', submitForm);


function submitForm() {

 
 event.preventDefault();
 const formname = document.getElementById('fname').value
 const formemail = document.getElementById('email').value
 const formsubject = document.getElementById('title').value
 const formmessage = document.getElementById('message').value

 let allinfo = []

 allinfo.push({
     name : formname,
     email: formemail,
     subject: formsubject,
     message: formmessage,
 })

 console.log(allinfo);


 
}*/
const messageSubmitted = document.getElementById('mS');
messageSubmitted.style.display = 'none';
const fnameElement = document.getElementById("fname");
const lnameElement = document.getElementById("lname");
const emailElement = document.getElementById("email");
const titleElement = document.getElementById("title");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);


//Set database object here
let db = firebase.database().ref();

/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const name    =     titleElement.value + ' ' + fnameElement.value + ' ' + lnameElement.value;
    const message         = messageElement.value;

    fnameElement.value = "";
    lnameElement.value = "";
    emailElement.value = "";
    messageElement.value  = "";
 messageSubmitted.style.display = 'block';
    console.log(name + " : " + message);

    //Update database here
    let userInput = {
        Name : name,
        Message: message
    }

    db.push(userInput);

}
