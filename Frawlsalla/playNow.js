function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var password = document.contactForm.password.value;
    var gender = document.contactForm.gender.value;
    var toc = document.contactForm.toc;
    
    var nameErr = emailErr = passwordErr = genderErr = tocErr = true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        printError("nameErr", "");
        nameErr = false;
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        printError("emailErr", "");
        emailErr = false;
    }
    
    // Validate password
    if(password == "") {
        printError("passwordErr", "Please enter your password");
    } else {
        printError("passwordErr", "");
        passwordErr = false;
    }
    
    // Validate gender
    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    
    // Validate termCond checkbox
    if(!toc.checked){
        printError("tocErr", "Please check this Terms and Conditions");
    } else{
        printError("tocErr", "");
        tocErr = false;
    }

    if((nameErr && emailErr && passwordErr && genderErr && tocErr) == true) {
        document.getElementById("myForm").reset();
    } 

    if((nameErr || emailErr || passwordErr || genderErr || tocErr) == true) {
       return false;
    } 

};