var btn2 = document.getElementById("btn2");

var em2 = document.getElementById("email2");

var pw2 = document.getElementById("password2");





var email = document.querySelector("#email");

var password = document.querySelector("#password");


var rpassword = document.querySelector("#rpassword");




 function  Log(){

    var em2 = document.getElementById("email2");

    if(em2.value == ""){
        alert("please enter email");
        var btn2 = document.getElementById("btn2");
        btn2.setAttribute("href", "#");
        return;
    }

    
    if (!em2.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ) {
        alert('Please fill a valid Email address');
        var btn2 = document.getElementById("btn2");
        btn2.setAttribute("href", "#");
        return;
    }


    
    if(pw2.value == ""){
        alert("please enter password");
        var btn2 = document.getElementById("btn2");
        btn2.setAttribute("href", "#");
        return;
    }

    if (!pw2.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$/)) {
        alert('Enter a password combination of at least eight numbers, letters and punctuation marks (such as ! and &).');
        var btn2 = document.getElementById("btn2");
        btn2.setAttribute("href", "#");
    return;
    }


    if (em2.value, pw2.value !== ""){
    
        var btn2 = document.getElementById("btn2");
        btn2.setAttribute("href", "index.html");
    } else{ 
        var btn2 = document.getElementById("btn2");
        btn2.setAttribute("href", "#");
    }
}







var btn1 = document.getElementById("btn1");

 function  Creat(){

    


       




    if(email.value == ""){
        alert("please enter email");
        var btn1 = document.getElementById("btn1");
        btn1.setAttribute("href", "#");
        return;
    }

    
    if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ) {
        alert('Please fill a valid Email address');
        var btn1 = document.getElementById("btn1");
        btn1.setAttribute("href", "#");
        return;
    }


    
    
    if(password.value == ""){
        alert("please enter password");
        var btn1 = document.getElementById("btn1");
        btn1.setAttribute("href", "#");
        return;
    }

    if (!password.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$/)) {
        alert('Enter a password combination of at least eight numbers, letters and punctuation marks (such as ! and &).');
        var btn1 = document.getElementById("btn1");
        btn1.setAttribute("href", "#");
    return;
    }



    if(rpassword.value == ""){
        alert("please repeat password");
        var btn1 = document.getElementById("btn1");
        btn1.setAttribute("href", "#");
        return;
    }

    let bet = password.value;

    let bot = rpassword.value

    if(bet !== bot){
        alert("password does not match");
        var btn1 = document.getElementById("btn1");
        btn1.setAttribute("href", "#");
        return;
    }
   

if (email.value, password.value, rpassword.value !== ""){
    
    var btn1 = document.getElementById("btn1");
    btn1.setAttribute("href", "login.html");
} else{ 
    var btn1 = document.getElementById("btn1");
    btn1.setAttribute("href", "#");
}


}


