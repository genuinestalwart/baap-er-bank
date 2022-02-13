window.addEventListener('load', () => {
    document.getElementById("login-btn").addEventListener("click", () => {
        const userEmail = document.getElementById("user-email");
        const userPassword = document.getElementById("user-password");

        if (userEmail.value == "shangchi@baaperbank.com" && userPassword.value == "m@ndAr1n") {
            document.getElementById("invalid-credentials").style.display = "none";
            window.location.href = "bank.html";
        } else {
            userPassword.value = "";
            document.getElementById("invalid-credentials").style.display = "block";
        }
    });
});