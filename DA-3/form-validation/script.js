function returnFalse() {
    return false;
}

function validateName(name, errorField, elementId) {
    var regex = /^[a-zA-Z]+$/;

    if(name.length < 2)
    {
        document.getElementById(errorField).innerHTML = "Name must be of atleast 2 characters";
        addRedBorder(elementId);
        return false;
    }
        
    else if(name.length > 25)
    {
        document.getElementById(errorField).innerHTML = "Name must be of atmost 25 characters";
        addRedBorder(elementId);
        return false;
    }
        
    else if(!regex.test(name))
    {
        document.getElementById(errorField).innerHTML = "Name must only contain english alphabets";
        addRedBorder(elementId);
        return false;
    }
        
    else
    {
        addGreenBorder(elementId);
        document.getElementById(errorField).innerHTML = "";
        return true;
    }

}


function validateGender() {
    var rb1_chkd = document.getElementById("male").checked;
    var rb2_chkd = document.getElementById("female").checked;

    console.log(rb1_chkd);
    console.log(rb2_chkd);
    if(!rb1_chkd && !rb2_chkd)
    {
        document.getElementById("genderError").innerHTML = "Choose Gender!";
        addRedBorder("genderDiv");
        return false;
    }
        
    else
    {
        addGreenBorder("genderDiv");
        document.getElementById("genderError").innerHTML = "";
        return true;
    }
    
}

function validateAge(){
    var age = document.getElementById("age").value;

    if(age < 18 || age > 40)
    {
        document.getElementById("ageError").innerHTML = "Age Must be between 18 and 40";
        addRedBorder("age")
        return false;
    }
    else
    {
        addGreenBorder("age");
        document.getElementById("ageError").innerHTML = "";
        return true;
    }
    
}

function validateUsername() {
    var username = document.getElementById("username").value;
    var regex = /^[a-zA-Z\._]+$/

    if(username.length < 8 || username.length > 20)
    {
        document.getElementById("usernameError").innerHTML = "Username must be between 8 and 20 characters";
        addRedBorder("username");
        return false;
    }
        
    else if(!regex.test(username))
    {
        document.getElementById("usernameError").innerHTML = "Username can only contain english alphabets and dots(.) and underscores(_)";
        addRedBorder("username");
        return false;
    }

    else
    {
        addGreenBorder("username");
        document.getElementById("usernameError").innerHTML = "";
        return true;
    }
}

function validateQualification(){
    var qualification = document.getElementById("qualification");
    if(qualification.selectedIndex < 2)
    {
        document.getElementById("qualificationError").innerHTML = "This Job Requires a minimum qualification of Bachelors Degree";
        addRedBorder("qualification");
        return false;
    }
    else
    {
        addGreenBorder("qualification");
        document.getElementById("qualificationError").innerHTML = "";
        return true;
    }
}

function validateEmail(){
    var email = document.getElementById("email").value;
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if(!regex.test(email))
    {
        document.getElementById("emailError").innerHTML = "Incorrect Email";
        addRedBorder("email");
        return false;
    }
        
    else
    {
        addGreenBorder("email");
        document.getElementById("emailError").innerHTML = "";
        return true;
    }
        
}

function validatePassword(){
    var pw = document.getElementById("password").value;
    if(pw == "")
    {
        document.getElementById("passwordError").innerHTML = "Enter Password";
        addRedBorder("password");
        return false;
    }
        

    else if(pw.length < 6 || pw.length > 30)
    {
        document.getElementById("passwordError").innerHTML = "Your Password should be between 6 and 30 characters";
        addRedBorder("password");
        return false;
    }
        
    else
    {
        addGreenBorder("password");
        document.getElementById("passwordError").innerHTML = "";
        return true;
    }
}

function addRedBorder(elementId){
    document.getElementById(elementId).style.border = "3px solid red";
}

function addGreenBorder(elementId){
    document.getElementById(elementId).style.border = "5px solid green";
}

function validateInput() {
    var fname = document.getElementById("loginForm")["fname"].value;
    var lname = document.getElementById("loginForm")["lname"].value;

    var iscorrectFname = validateName(fname, "fnameError", "fname");
    var iscorrectLname = validateName(lname, "lnameError", "lname");
    var iscorrectGender = validateGender();
    var iscorrectAge = validateAge();
    var iscorrectUsername = validateUsername();
    var iscorrectPassword = validatePassword();
    var iscorrectEmail = validateEmail();
    var iscorrectQualification = validateQualification();


    if(iscorrectFname &&
        iscorrectLname &&
        iscorrectGender &&
        iscorrectAge &&
        iscorrectUsername &&
        iscorrectPassword &&
        iscorrectEmail &&
        iscorrectQualification)
    {
        alert("Details Validated! Entered Details are Correct");
    }
}