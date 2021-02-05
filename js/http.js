function signUp() {
    const message = document.getElementById("message");
    const pass1 = document.getElementById("password1").value;
    const pass2 = document.getElementById("password2").value;

    if (pass1 !== pass2) {
        message.className = "text-danger";
        message.innerText = "Passwords do not match";
        return;
    }

    const data = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password1").value,
    }

    $.ajax({
        type: "POST",
        url: "https://onelineman.eu/signup",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (res) => {
            message.className = "text-success";
            message.innerText = "Successful! Check your email!";
        },
        error: (err) => { 
            message.className = "text-danger";
            message.innerText = err.responseJSON.message;
        }
    });

    return false;
}