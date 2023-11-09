import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const FormUpdateSkill = ({idSkill}) => {
    const dispatch = useDispatch();
    const detail = useSelector(state => state.skills.detailSkill);
    const [input, setInput] = useState({
        name: "",
        image: ""
    });

    useEffect(() => {
        if(idSkill){
            dispatch()
        }
    })



    return (
        <div
            className="modal fade"
            id="skillModal"
            tabIndex="-1"
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

export default FormUpdateSkill
