function val_Password() {
    let password = document.getElementById("password").value;
    let conf_password = document.getElementById("confirm_password").value

    if (password != conf_password && conf_password!=null) {
        document.getElementById('wrong-password-msg').style.color = 'red';
        document.getElementById('wrong-password-msg').innerHTML = "Passwords don't match";

        document.getElementById("confirm_password").style.border = '3px rgb(151,37,37) solid;';
    }
    else{
        document.getElementById('wrong-password-msg').innerHTML ="";
        document.getElementById("confirm_password").style.border = "border: 2px rgb(38, 151, 38) solid;"
    }
}