function checkForm() {

    var userName = document.getElementById("username");
    var password = document.getElementById("password");
    var email = document.getElementById("email");
    var checkbox = document.getElementById("checkbox");
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var is_valid = false;

    // Hide all errors at starting

    hide_errors("usname_eror_msg", "pass_eror_msg", "pass_length_eror", "email_eror_msg", "email_valid_eror", "checkbox_eror_msg");

    is_valid = true;

    // check username input value
    if (userName.value == "") {
        set_eror_and_display("usname_eror_msg", "Lutfen Bu Alani doldurun");
        is_valid = false;
    }

    // check password input value and lenght

    if (password.value == "") {
        set_eror_and_display("pass_eror_msg", "Lutfen Bu Alani doldurun");
        is_valid = false;
    } else if (password.value.length < 8) {
        set_eror_and_display("pass_length_eror", "şifre en az 8 karakter uzunluğunda olmalıdır");
        is_valid = false;
    }

    // check email input value and validation

    if (email.value == "") {
        set_eror_and_display("email_eror_msg", "Lutfen Bu Alani doldurun");
        is_valid = false;
    } else if (!emailPattern.test(email.value)) {
        set_eror_and_display("email_valid_eror", "Geçerli bir");
        is_valid = false;
    }

    // checkbox 

    if (checkbox.checked == false) {
        set_eror_and_display("checkbox_eror_msg", "Lutfen Bu Alani doldurun");
        is_valid = false;
    }

    return is_valid;
}

function hide_errors() {
    for (var i = 0, j = arguments.length; i < j; i++) {
        document.getElementById(arguments[i]).style.display = "none";
    }

}

function set_eror_and_display() {
    document.getElementById(arguments[0]).innerHTML = arguments[1];
    document.getElementById(arguments[0]).style.display = "inline";
}