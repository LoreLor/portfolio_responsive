import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { projectById, updateProject } from "../../../store/actions/projects";
import './Projects.scss';



const FormProjectUpdate = ({ id }) => {
    const dispatch = useDispatch();
    const detail = useSelector(state => state.projects.detailProject);
    const [input, setInput] = useState({
        name: "",
        description: "",
        stack: "",
        deploy: "",
        github: "",
        demo: "",
        image: "",
    });

    useEffect(() => {
        if (id) {
            dispatch(projectById(id));
        }
    }, [dispatch, id]);


    useEffect(() => {
        setInput({
            name: detail.name || "",
            description: detail.description || "",
            stack: detail.stack || "",
            deploy: detail.deploy || "",
            github: detail.github || "",
            demo: detail.demo || "",
            image: detail.image || "",
        });
    }, [detail]);

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProject(id, input));
        setInput({
            name: "",
            description: "",
            stack: "",
            deploy: "",
            github: "",
            demo: "",
            image: "",
        });
        toast.success('Project Updated Successfully', {
            position: toast.POSITION.TOP_CENTER,
            autoClose:1500,
            theme: 'colored'
        });
    };

    return (
        <div
            className="modal fade"
            id="projectModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="container">
                        <div className="text-zone">
                            <div className="accordion-zone">
                                <div
                                    className="accordion"
                                    id="accordionExample"
                                >
                                    <div className="accordion-item">
                                        <h2
                                            className="accordion-header"
                                            id="headingFour"
                                        >
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#updateProject"
                                                aria-expanded="false"
                                                aria-controls="collapseOne"
                                                
                                            >
                                                PROJECTS - UPDATE
                                            </button>
                                        </h2>
                                        <div
                                            id="updateProject"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingFour"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <form>
                                                    <div className="form-group">
                                                        <label
                                                            className="labelform"
                                                            htmlFor="name"
                                                        >
                                                            Project Name:
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            id="name"
                                                            value={input.name}
                                                            onChange={handleChange}
                                                            className="form-control"
                                                            required
                                                        />
                                                        <label
                                                            className="labelform"
                                                            htmlFor="description"
                                                        >
                                                            Description:
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="description"
                                                            id="description"
                                                            value={input.description}
                                                            onChange={handleChange}
                                                            className="form-control"
                                                            required
                                                        />
                                                        <label
                                                            className="labelform"
                                                            htmlFor="stack"
                                                        >
                                                            Stack:
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="stack"
                                                            id="stack"
                                                            value={input.stack}
                                                            onChange={handleChange}
                                                            className="form-control"
                                                            required
                                                        />
                                                        <label
                                                            className="labelform"
                                                            htmlFor="deploy"
                                                        >
                                                            Deploy:
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="deploy"
                                                            id="deploy"
                                                            value={input.deploy}
                                                            onChange={handleChange}
                                                            className="form-control"
                                                            required
                                                        />
                                                        <label
                                                            className="labelform"
                                                            htmlFor="github"
                                                        >
                                                            Github:
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="github"
                                                            id="github"
                                                            value={input.github}
                                                            onChange={handleChange}
                                                            className="form-control"
                                                            required
                                                        />
                                                        <label
                                                            className="labelform"
                                                            htmlFor="demo"
                                                        >
                                                            Demo:
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="demo"
                                                            id="demo"
                                                            value={input.demo}
                                                            onChange={handleChange}
                                                            className="form-control"
                                                            required
                                                        />
                                                        <label
                                                            className="labelform"
                                                            htmlFor="image"
                                                        >
                                                            Image:
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="image"
                                                            id="image"
                                                            value={input.image}
                                                            onChange={handleChange}
                                                            className="form-control"
                                                            required
                                                        />
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            justifyContent:
                                                                "flex-end",
                                                        }}
                                                    >
                                                        <button
                                                            type="submit"
                                                            className="btn btn-ligth"
                                                            onClick={handleSubmit}
                                                        >
                                                            SAVE
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormProjectUpdate;
