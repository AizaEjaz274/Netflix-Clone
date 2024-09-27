// document.getElementsByClassName(".btnn").addEventListener("click", function () {
//     // Show the login form and background
//     document.getElementById("login-page").classList.remove("hidden");
// });

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".btnn").addEventListener("click", function () {
        document.getElementById("login-page").classList.remove("hidden");
    });
});





document.getElementById("Acc").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default link behavior
    document.getElementById("login-page").classList.add("hidden");
});





document.getElementById("get-started-btn").addEventListener("click", function () {
    document.getElementById("email-input").focus();
});
