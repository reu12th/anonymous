function emailSend() {
    var storyText = document.querySelector('textarea').value;

    // Customize the messageBody with personalized content and styling
    var messageBody = `
        <div style="
        background: radial-gradient(rgb(36, 59, 85) 20%, rgb(20, 30, 48) 80%);
            border-radius: 10px;
            color: #fff;
            padding: 20px;
            margin: 10px auto; /* Center the content horizontally */
            text-align: center;
            font-family: 'Poppins', sans-serif;
            width: 95%;
            max-width: 600px; /* Set a maximum width to prevent overflow */
            border: 1px solid rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(9px);
            -webkit-backdrop-filter: blur(9px);
        ">
            <h2 style="font-family: 'Righteous', sans-serif; color: #fff; font-size: 2.4rem;">Dear Love TV,</h2>
            <p style="color: #fff; font-weight: 600; font-family: 'Lato', sans-serif; font-size: 1.2rem; line-height: 150%;"><em><u>Someone sent you a story:</u></em></p>
            <p style="color: #fff; font-weight: 600; font-family: 'Lato', sans-serif; font-size: 1.0rem; line-height: 150%; text-align: justify; text-justify: auto;">${storyText}</p>
        </div>
    `;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username : "lovetvstories@gmail.com",
        Password : "B9749C816F0637ACA2D3EE16E7FEB7C9D803",
        To: 'lovetvanonymous@gmail.com',
        From: "lovetvstories@gmail.com",
        Subject: "New Anonymous Message",
        Body: messageBody,
    }).then(
        message => {
            if (message == 'OK') {
                swal({
                    title: "Successful",
                    text: "Your anonymous message has been sent!",
                    icon: "success",
                    button: {
                        text: "OK",
                        className: "custom-confirm-button" // Add a custom class to the OK button
                    },
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            } else {
                swal({
                    title: "Error",
                    text: "There was an error sending your message!",
                    icon: "error",
                    button: {
                        text: "OK",
                        className: "custom-confirm-button" // Add a custom class to the OK button
                    },
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
        }
    );
}
