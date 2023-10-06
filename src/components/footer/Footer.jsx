import React from "react";

const Footer = () => {
    return (
        <div className="container-lg flex-column flex-wrap justify-content-center text-center">
            <div className="row">
                {/* <div class="col-md-4">
                    <h4>Contact</h4>
                    <p>
                        <a href="#contact">Contact me</a>
                    </p>
                    <p>
                        <a href="tel:+">(123) 456-7890</a>
                    </p>
                </div> */}
                <div className="col-md-6">
                    <h4>Enlaces</h4>
                    <ul className="list-unstyled">
                        <li>
                            <a href="#home">Inicio</a>
                        </li>
                        <li>
                            <a href="#about">Acerca de</a>
                        </li>
                        <li>
                            <a href="#ingredients">Ingredientes</a>
                        </li>
                        <li>
                            <a href="#steps">Paso a Paso</a>
                        </li>
                        <li>
                            <a href="#nutrition">Valores Nutricionales</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h4>Contact Me</h4>
                    <a href="https://www.facebook.com/" target="_blank">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.twitch.tv/" target="_blank">
                        <i className="bi bi-twitch"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
