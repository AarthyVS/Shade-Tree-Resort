document.getElementById("myForm").addEventListener("submit", function(event) 
{
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var nameRegex = /^[a-zA-Z\s]*$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^\d{10}$/;
    if (!nameRegex.test(name)) 
    {
        alert("Invalid name. Only alphabets and spaces are allowed.");
            return;
    }
    else
    {
        localStorage.setItem("Messager Name",name);
        var name=localStorage.getItem("name");
        document.getElementById("name").value=name;
    }

    if (!emailRegex.test(email)) 
    {
        alert("Invalid email address.");
        return;
    }
    else
    {
        localStorage.setItem("Messager Email",email);
        var email=localStorage.getItem("email");
        document.getElementById("email").value=email;
    }

    if (!phoneRegex.test(phone))
    {
        alert("Invalid phone number. Please enter a 10-digit number.");
        return;
    }
    else
    {
        localStorage.setItem("Messager Phone Number",phone);
        var phone=localStorage.getItem("phone");
        document.getElementById("phone").value=phone;
    }

    alert("Your reduest has been successfully submitted.");
});