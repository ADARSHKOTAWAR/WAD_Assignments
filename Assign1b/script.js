// script.js (Handling Form Submission & AJAX Request)
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    let userData = { name, email, password };
    
    // Store in localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    
    // AJAX POST Request
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://example.com/api/register", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert("User registered successfully!");
        }
    };
    xhr.send(JSON.stringify(userData));
    
    // Redirect to users page
    window.location.href = "users.html";
});