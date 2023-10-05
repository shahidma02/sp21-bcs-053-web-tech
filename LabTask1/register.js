$(document).ready(function () {
    $("#registrationForm").validate({
        rules: {
            name:"required",
            username: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            },
            confirm_password: {
                required: true,
                equalTo: "#password"
            }
        },
        messages: {
            name:"Please enter your name",
            
            email: "Please enter a valid email address",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long"
            },
            confirm_password: {
                required: "Please confirm your password",
                equalTo: "Passwords do not match"
            }
        },
        submitHandler: function (form) {
            alert("Form submitted successfully!");
        }
    });
});
