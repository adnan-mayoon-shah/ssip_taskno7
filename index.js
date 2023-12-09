function showSignUpForm() {
    document.getElementById("signinForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
}

function showSignInForm() {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("signinForm").style.display = "block";
}
function signIn(event) {
    event.preventDefault();
    alert("Sign-in successful!");
    window.location.href = "newpage.html";
}