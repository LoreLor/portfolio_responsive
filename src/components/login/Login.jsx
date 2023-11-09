import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, signin } from "../../store/actions/user";
import axios from "axios";
import SERVER from "../../server/index";
import { ToastContainer, toast } from "react-toastify";
import AnimatedLetters from "../animatedLetters/AnimatedLetters";
import s from "./Login.module.css";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user);

    const [letterClass, setLetterClass] = useState("text-animate");

    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            Object.keys(input).length === 2 &&
            input.email !== "" &&
            input.password !== ""
        ) {
            let response = null;
            try {
                response = await axios.post(`${SERVER}/user/signin`, input);
                if (response.data.message === "Login Success") {
                    dispatch(signin(input));

                    toast.success(`${response.data.message}`),
                        {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 2000,
                            theme: "colored",
                        };

                    setInput({
                        email: "",
                        password: "",
                    });

                    setTimeout(() => {
                        navigate("/login/dashboard");
                    }, 3500);
                }
            } catch (error) {
                toast.error(<div>Invalid email or Password</div>, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 5000,
                    theme: "colored",
                });
            }
        }
    };

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    useEffect(() => {
        if (user.token) navigate("/dashboard");
    }, [navigate, user.token]);

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3500);
    }, []);

    return (
        <div className={`container ${s.signin_page}`}>
            <ToastContainer></ToastContainer>
            <div className={s.signin_title}>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={["S", "i", "g", "n", " ", "I", "n"]}
                        idx={15}
                    />
                </h1>
                <div className={s.signin_form}>
                    <form onSubmit={handleSubmit}>
                        <ul>
                            <li data-aos="fade-right">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    required
                                />
                            </li>
                            <li data-aos="fade-left">
                                <input
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    required
                                />
                            </li>

                            <li data-aos="fade-up">
                                <input
                                    type="submit"
                                    className={s.flat_button}
                                    value="SEND"
                                />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
