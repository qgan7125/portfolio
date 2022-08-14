import React, { useRef, useState, useEffect } from 'react';
import { sendForm, init } from 'emailjs-com';
import './contact.css';

const DISAPPEAR_TIME = 1500;
const Contact = () => {
    const formRef = useRef();
    const [sentEmail, setSent] = useState("");
    const [notification, setNotification] = useState();

    init(process.env.REACT_APP_PUBLIC_KEY);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send email to me
        sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID_OWNER,
            formRef.current)
            .then((result) => {
                console.log(result.text);
                setSent("successful");
            }, (error) => {
                console.log(error.text);
                setSent("fail");
            });
        // Send email to user
        sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID_USER,
            formRef.current)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    useEffect(() => {
        if (sentEmail !== "") {
            setNotification(
                <div className='notification'>
                    {
                        sentEmail === "successful"
                            ?
                            "Sent Message successful!"
                            :
                            "Sent Message failed!"
                    }
                </div>
            )

            setTimeout(() => {
                setNotification(null)
            }, DISAPPEAR_TIME)
            setSent("");
        }
    }, [sentEmail])

    return (
        <section id="ContactSection">
            <h1>Contact</h1>
            <form onSubmit={handleSubmit} ref={formRef}>
                <div className='form__element'>
                    <label>Name:</label>
                    <input
                        type='text'
                        name='user_name'
                        placeholder="Enter your name..."
                        required />
                </div>
                <div className='form__element'>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Enter your email..."
                        required />
                </div>
                <div className='form__element'>
                    <label>Message:</label>
                    <textarea
                        name="message"
                        placeholder="Enter your message..." />
                </div>
                <button type="submit" className='btn btn-primary btn__contact'>Submit</button>
            </form>
            {notification}
        </section>
    )
}

export default Contact;