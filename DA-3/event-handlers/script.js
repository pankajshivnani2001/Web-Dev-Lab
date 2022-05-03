document.onkeydown = startAnimation //the onKeyDown Event counts on the entire document

function startAnimation(event) {
    if(event.keyCode == 32)//space
    {
        event.preventDefault();//to prevent page scolling on pressing spacebar 
        if(document.getElementById("circle").style.animationPlayState == 'paused')
            document.getElementById("circle").style.animationPlayState = 'running';
        else
            document.getElementById("circle").style.animation = "circleAnimation 5s infinite";
    }


    if(event.keyCode == 27)
    {
        document.getElementById("circle").style.animationPlayState = 'paused';
    }
}


function randomColorSelector() {
    var color = Math.floor(Math.random()*16777215).toString(16);
    console.log(color);
    document.getElementById("randomColorContainer").style.backgroundColor = "#" + color;
}

function changeColor(id) {
    var currentColor = document.getElementById(id).style.color;
    if(currentColor == "red")
    {
        document.getElementById(id).style.color = "black";
        document.getElementById(id).innerHTML = "Click Me to Change My Color To Red";
    }
        
    else    
    {
        document.getElementById(id).style.color = "red";
        document.getElementById(id).innerHTML = "Click Me to Change My Color back To Black  ";

    }
}

function increaseSize(id) {
    document.getElementById(id).style.fontSize = "50px";
}

function decreaseSize(id) {
    document.getElementById(id).style.fontSize = "20px";
}

function hidePassword(){
    document.getElementById("password").style.visibility = "hidden";
}

function showPassword(){
    document.getElementById("password").style.visibility = "visible";
}

function hideUsername(){
    document.getElementById("username").style.visibility = "hidden";
}

function showUsername(){
    document.getElementById("username").style.visibility = "visible";
}
