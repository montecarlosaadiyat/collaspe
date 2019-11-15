var message = "";
alert("yes");
$("#sendMessage").on("click", function() {
    message = $("#contactform").serialize();
    alert(message);
    $.ajax({
        url: "//formspree.io/xahweh@gmail.com",
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
    alert('Thanks for the email, we\'ll be in touch promptly.');
    return false;
});
