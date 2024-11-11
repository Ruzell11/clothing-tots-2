function validate(){
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const username = document.getElementById('Username');




    if(email.value === '' || password.value === '' || username.value === ''){
        alert("No blanks allowed")
        return false;
    }
    else{
        return true

    }
}


