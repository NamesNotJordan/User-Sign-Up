function val_Password() {
    let password = document.getElementById("password").value;
    let conf_password = document.getElementById("confirm_password").value

    if (password != conf_password && conf_password!=null) {
        document.getElementById('wrong-password-msg').style.color = 'red';
        document.getElementById('wrong-password-msg').innerHTML = "Passwords don't match";
    }
    else{
        document.getElementById('wrong-password-msg').innerHTML ="";
    }
}