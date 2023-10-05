import React, { Fragment, useEffect } from 'react'
//import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders'
import './CardProject.scss';

const CardProject = ({ name, image, description, stack, deploy, demo, github }) => {
    return (
        <Fragment key={name}>
            <div className="projects">
                <div className="projects-items h-100">
                    <div className="projects-item">
                        <img
                            src={image}
                            alt="Project image"
                        />
                        <div className='projects-text'>
                            <p>Name: <span>{name}</span></p>
                            <p>Description: <span>{description}</span></p>
                            <p>Stack: <span>{stack}</span></p>
                            <p>Deploy: <span>{deploy}</span></p>
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
