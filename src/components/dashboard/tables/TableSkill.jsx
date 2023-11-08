import axios from "axios";
import React, { useState, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allSkills, deleteSkill } from "../../../store/actions/skills";
import FormUpdateSkill from "./FormUpdateSkill";
import SERVER from '../../../server/index'
import { toast } from "react-toastify";
import "./Projects.scss";



const TableSkill = () => {
    const dispatch = useDispatch();
    const skills = useSelector((state) => state.skills.skills);
    
    const [showModal, setShowModal] = useState(false);
    const [deleteSkills, setDeleteSkill] = useState(null);

    const [input, setInput] = useState({
        name: "",
        image: "",
    });

    useEffect(() => {
        dispatch(allSkills());
    }, []);

    // escucho el cambio
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    // Agrego un Skill
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(Object.keys(input).length === 2 && input.values !== ''){
            let response = null;
            try {
                response = await axios.post(`${SERVER}/skill`, input)
                if(response.data.message === 'Skill Created'){
                    setInput({
                        name:'',
                        image:'',
                    });
                    dispatch(allSkills());
                    toast.success(`${response.data.message}`, {
                        position: toast.POSITION.BOTTOM_CENTER,
                        autoClose: 1500,
                        theme: 'colored'
                    });
                }
            }catch (error) {
                toast.error(console.log(error), {
                    position: toast.POSITION.BOTTOM_CENTER,
                    autoClose: 1500,
                    theme: 'colored'
                })
            }
        }
    }

    // encuentro el skill por id
    const handleUpdateSkill = (id) => {
        skills.filter(skill => skill.id === id)
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };   

    // elimino el skill
    const handleDeleteSkill = async (id) => {
        try {
            await dispatch(deleteSkill(id)); // Elimina la skill
            dispatch(allSkills()); // Actualiza los datos de inmediato
            setDeleteSkill(id);
            toast.success(<span>Skill Deleted Successfully</span>, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
                theme: 'colored',
            });
        } catch (error) {
            toast.error(console.log(error), {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500,
                theme: 'colored'
            });
        }
    };
    
    useEffect(() =>{
        if(deleteSkills){
            setDeleteSkill(null);
            dispatch(allSkills());
        }
    }, [])


    return (
        <div className="accordion mt-4" id="accordionSkill">
            {/* Show Skill */}
            <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingOne">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#showSkill"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                    >
                        SHOW SKILL
                    </button>
                </h2>
                <div
                    id="showSkill"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionSkill"
                >
                    <div className="accordion-body">
                        <div className="attributes">
                            <table className="table table-group-divider">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Skill</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {skills &&
                                        skills.map((s) => (
                                            <Fragment key={s.id}>
                                                <tr>
                                                    <th scope="row">{s.id}</th>
                                                    <td className="img-zone">
                                                        <img
                                                            src={s.image}
                                                            alt={s.name}
                                                        />
                                                    </td>
                                                    <td>{s.name}</td>
                                                    <td>
                                                        <button 
                                                            className="btn btn-light"
                                                            onClick={() => handleDeleteSkill(s.id)}
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="12"
                                                                height="16"
                                                                fill="currentColor"
                                                                className="bi bi-trash"
                                                                viewBox="0 0 15 15"
                                                            >
                                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                                                />
                                                            </svg>
                                                        </button>
                                                        {/* Button Update */}
                                                        <button
                                                            className="btn btn-light"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#projectModal"
                                                            onClick={() =>handleUpdateSkill(s.id)}
                                                            type="button"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="12"
                                                                height="16"
                                                                fill="currentColor"
                                                                className="bi bi-pencil-square"
                                                                viewBox="0 0 15 15"
                                                            >
                                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                                                />
                                                            </svg>
                                                        </button>
                                                        <FormUpdateSkill 
                                                            showModal={showModal}
                                                            handleCloseModal={handleCloseModal}
                                                        />
                                                    </td>
                                                </tr>
                                            </Fragment>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add Skill */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#addSkill"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                    >
                        ADD SKILL
                    </button>
                </h2>
                <div
                    id="addSkill"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionSkill"
                >
                    <div className="accordion-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name" className="labelForm">
                                    Skill Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="form-control"
                                    required
                                    onChange={handleChange}
                                />

                                <label htmlFor="image" className="labelForm">
                                    Skill Image
                                </label>
                                <input
                                    type="url"
                                    name="image"
                                    id="image"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </div>
                        </form>
                    </div>
                    <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                        <button 
                            type="submit" 
                            className="btn btn-ligth"
                            onClick={handleSubmit}
                        >
                            SAVE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableSkill;
