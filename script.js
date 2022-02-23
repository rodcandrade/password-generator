function getPass() {
    var characters = "0123456789abcdefghijklmnopqrstuvwyxzABCDEFGHIJKLMNOPQRSTUVWYXZ!@#$%^&*()";
    var passLength = 12
    var password = ""

    for (var i = 0; i < passLength; i++) {
        var rnum = Math.floor(Math.random() * characters.length);
        password += characters.substring(rnum, rnum +1);
    }

    document.getElementById('password').value = password

}