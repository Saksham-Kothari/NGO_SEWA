function sendMail(){
    let parms ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        message : document.getElementById("description").value
    }

    emailjs.send("service_9xj9p1j","template_qzvq8f6", parms).then(alert("Email Sent!"))
}