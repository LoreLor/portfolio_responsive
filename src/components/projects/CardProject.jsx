import React, { Fragment } from "react";

const CardProject = ({ name, image, description, stack, deploy, demo, github }) => {
    return (
        <Fragment key={name}>
            <div className="projects">
                <div className="projects-items">
                    <div className="projects-item">
                        <img
                            src={require(`../../assets/images/${image}`)}
                            alt="Proyectos"
                        />
                        <div style={{ paddingLeft: 10, gap: 2 }}>
                            <p>Name: {name}</p>
                            <p>Description: {description}</p>
                            <p>Stack: {stack}</p>
                            <p>Deploy: {deploy}</p>
                        </div>
                        <div className="projects-btns">
                            <a
                                href={demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="projects-btn"
                            >
                                <FontAwesomeIcon
                                    icon={faEye}
                                    color="rgb(5, 245, 245)"
                                    fontSize={25}
                                />{" "}
                                <br />
                                Demo
                            </a>
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="projects-btn"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    color="rgb(5, 245, 245)"
                                    fontSize={25}
                                />{" "}
                                <br />
                                Github
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CardProject;
