document.getElementById("Register").addEventListener("submit", function(event) 
{
    event.preventDefault();
    var namereg = document.getElementById("namereg").value;
    var phonereg = document.getElementById("phonereg").value;
    var passwordreg = document.getElementById("passwordreg").value;
    var confpassword = document.getElementById("confpassword").value;
    var nameRegex = /^[a-zA-Z\s]*$/;
    var phoneRegex = /^\d{10}$/;
    var passwordRegex = /^/;
    if (!nameRegex.test(namereg)) 
    {
        alert("Invalid name. Only alphabets and spaces are allowed.");
            return;
    }
    else
    {
        localStorage.setItem("Register Name",namereg);
        var namereg=localStorage.getItem("namereg");
        document.getElementById("namereg").value=namereg;
    }

    if (!phoneRegex.test(phonereg))
    {
        alert("Invalid phone number. Please enter a 10-digit number.");
        return;
    }
    else
    {
        localStorage.setItem("Register Phone Number",phonereg);
        var phonereg=localStorage.getItem("phonereg");
        document.getElementById("phonereg").value=phonereg;
    }

    if (!passwordRegex.test(passwordreg))
    {
        alert("Enter the valid Password.");
        return;
    }

    if(passwordreg !== confpassword)
    {
        alert("Enter the password correctly")
        return;
    }
    else
    {
        localStorage.setItem("Register Password",passwordreg);
        var passwordreg=localStorage.getItem("passwordreg");
        document.getElementById("passwordreg").value=passwordreg;
    }

    alert("Your have successfully registered.");
});