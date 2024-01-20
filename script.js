function emailSend() {
    var storyText = document.querySelector('textarea').value;

    // Customize the messageBody with personalized content and styling
    var messageBody = `
        <div style="
            background: linear-gradient(90deg, #4158D0, #C850C0, #FFCC70);
            border-radius: 10px;
            color: #fff;
            padding: 20px;
            margin: 10px;
            text-align: center;
            font-family: 'Poppins', sans-serif;
            width: 95%;
            border: 1px solid rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(9px);
            -webkit-backdrop-filter: blur(9px);
        ">
            <h2 style="font-family: 'Righteous', sans-serif; color: #fff; font-size: 2.4rem;">Hello,</h2>
            <p style="color: #fff; font-weight: 600; font-family: 'Lato', sans-serif; font-size: 1.0rem; line-height: 150%;">This is an anonymous message:</p>
            <p style="color: #fff; font-weight: 600; font-family: 'Lato', sans-serif; font-size: 1.0rem; line-height: 150%;">${storyText}</p>
        </div>
    `;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "reu12th@gmail.com",
        Password: "4951BDDCFF2D6C9F4CAAFF846DD30773276B",
        To: 'abdulreuben2580@gmail.com',
        From: "reu12th@gmail.com",
        Subject: "New Anonymous Message",
        Body: messageBody,
    }).then(
        message => {
            if (message == 'OK') {
                swal({
                    title: "Successful",
                    text: "Your anonymous message has been sent!",
                    icon: "success",
                    button: "OK",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            } else {
                swal({
                    title: "Error",
                    text: "There was an error sending your message!",
                    icon: "error",
                    button: "OK",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
        }
    );
}
