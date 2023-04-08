function sendMail() {
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    };

    const serviceID = "service_ccwkq2f";

    const templateID = "template_2hny5bz";

    emailjs.send(serviceID,templateID,params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("subject").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("Message envoyé avec succès !");
            }
        ).catch((err) => console.log(err));

}
