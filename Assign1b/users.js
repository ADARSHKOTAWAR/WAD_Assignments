document.addEventListener("DOMContentLoaded", function() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userList = document.getElementById("userList");
    
    users.forEach(user => {
        let li = document.createElement("li");
        li.textContent = `${user.name} - ${user.email}`;
        userList.appendChild(li);
    });
});