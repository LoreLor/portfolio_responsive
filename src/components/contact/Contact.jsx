import React, { useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../animatedLetters/AnimatedLetters";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Contact.scss";

const Contact = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    const currentForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3500);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "my_contact_service",
                "template_mx139gw",
                currentForm.current,
                "JHE_WxNC0wUR4w0_H"
            )
            .then(() => {
                toast.success(`Email Send Successfully`, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 100,
                    theme: "colored",
                });
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            })
            .catch((error) => {
                toast.error(console.log(error), {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 1000,
                    theme: "colored",
                });
            });
    };

    return (
        <>
            <div className="container contact-page">
            <ToastContainer />
                <div className="text-zone text-center">
                    <h2>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={[
                                "C",
                                "O",
                                "N",
                                "T",
                                "A",
                                "C",
                                "T",
                                " ",
                                "M",
                                "E",
                            ]}
                            idx={15}
                        />
                    </h2>
                    <div className="contact-form">
                        <form ref={currentForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required
                                    />
                                </li>
                                <li className="half">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input
                                        type="submit"
                                        className="flat-button"
                                        value="SEND"
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="line-scale" />
        </>
    );
};

export default Contact;
