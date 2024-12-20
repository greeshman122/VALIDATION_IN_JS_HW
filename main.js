function validateForm() {
    let name = document.forms["loginForm"]["name"].value;
    let age = document.forms["loginForm"]["age"].value;

    if (name == "") {
        window.alert("Name must be filled out");
        return false;
    }

    if (age == "") {
        window.alert("Age must be filled out");
        return false;
    }

    age = parseInt(age);
    if (isNaN(age) || age < 18) {
        window.alert("You must be 18 years or older to login");
        return false;
    }
    else
    {
        window.alert("Details Submitted Successfully")
    }

    return true;
}