import React, { useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../animatedLetters/AnimatedLetters";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "./Contact.scss";


const Contact = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    const currentForm = useRef();
    const [input, setInput] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3500);
    }, []);

    const handlerChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value,
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "my_contact_service",
                "template_mx139gw",
                currentForm.current,
                "JHE_WxNC0wUR4w0_H"
                )
                .then((res) => {
                    window.scrollTo(0, 0);             
                    toast.success(`Email Send Successfully`, {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 1000,
                        theme: "colored",
                    });
                    setInput({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                    e.target.reset();
                })
                .catch((error) => {
                    toast.error(console.log(error), {
                        position: toast.POSITION.BOTTOM_CENTER,
                        autoClose: 1000,
                        theme: "colored",
                    });
                });
        };

    return (
        <section id="contact">
            <div className="container contact-page">
                <div className="contact-title text-center">
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
                                        onChange={handlerChange}
                                        data-aos="fade-right"
                                    />
                                </li>
                                <li className="half">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                        onChange={handlerChange}
                                        data-aos="fade-left"
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                        onChange={handlerChange}
                                        data-aos="fade-up"
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                        onChange={handlerChange}
                                        data-aos="fade-up"
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
        </section>
    );
};

export default Contact;
