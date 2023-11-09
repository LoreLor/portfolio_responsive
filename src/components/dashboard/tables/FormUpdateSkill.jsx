import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { skillById, updateSkill } from '../../../store/actions/skills';
import { toast } from 'react-toastify';


const FormUpdateSkill = ({ idSkill }) => {
    const dispatch = useDispatch();
    const detail = useSelector(state => state.skills.detailSkill);

    const [input, setInput] = useState({
        name: "",
        image: ""
    });

    useEffect(() => {
        if(idSkill){
            dispatch(skillById(idSkill));
        }
    }, [idSkill]);

    useEffect(() => {
        setInput({
            name: detail.name || "",
            image: detail.image || "",
        })
    }, [detail]);

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    };

    const handleSubmit = (e) => {
        console.log('idSkill, input :>> ',  input);
        e.preventDefault();
        dispatch(updateSkill(idSkill, input));
        setInput({
            name:"",
            image:""
        });
        toast.success('Skill Updated Successfully', {
            position: toast.POSITION.TOP_CENTER,
            autoClose:1500,
            theme: 'colored'
        });
    };


    return (
        <div
            className="modal fade"
            id="skillModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="container form-page">
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
                                                data-bs-target="#updateSkill"
                                                aria-expanded="false"
                                                aria-controls="collapseOne"
                                            >
                                                SKILL - UPDATE
                                            </button>
                                        </h2>
                                        <div
                                            id="updateSkill"
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
                                                            Skill Name:
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            id="name"
                                                            className="form-control"
                                                            required
                                                            value={input.name}
                                                            onChange={handleChange}
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
                                                            className="form-control"
                                                            required
                                                            value={input.image}
                                                            onChange={handleChange}
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
    )
}

export default FormUpdateSkill;
