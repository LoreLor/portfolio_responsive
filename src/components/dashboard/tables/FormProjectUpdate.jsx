import React from "react";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";



const FormProjectUpdate = () => {
    const { id } = useParams();


    return (
        <>
            <ToastContainer></ToastContainer>
            <div
                className="modal fade"
                id="projectModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="container form-page">
            <div className='text-zone'>
                <div className='accordion-zone'>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
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
                                <form >
                                    <div className='form-group'>
                                        <label className='labelform' htmlFor='name'>Project Name:</label>
                                        <input
                                            type='text'
                                            name='name'
                                            id='name'
                                            className='form-control'
                                            
                                            required
                                            

                                        />
                                        <label className='labelform' htmlFor='description'>Description:</label>
                                        <input
                                            type='text'
                                            name='description'
                                            id='description'
                                            className='form-control'
                                            
                                            required
                                           
                                        />
                                        <label className='labelform' htmlFor='stack'>Stack:</label>
                                        <input
                                            type='text'
                                            name='stack'
                                            id='stack'
                                            
                                            className='form-control'
                                            
                                            required
                                        />
                                        <label className='labelform' htmlFor='deploy'>Deploy:</label>
                                        <input
                                            type='text'
                                            name='deploy'
                                            id='deploy'
                                           
                                            className='form-control'
                                            
                                            required

                                        />
                                        <label className='labelform' htmlFor='github'>Github:</label>
                                        <input
                                            type='text'
                                            name='github'
                                            id='github'
                                            
                                            className='form-control'
                                            
                                            required
                                        />
                                        <label className='labelform' htmlFor='demo'>Demo:</label>
                                        <input
                                            type='text'
                                            name='demo'
                                            id='demo'
                                            
                                            className='form-control'
                                            
                                            required
                                        />
                                        <label className='labelform' htmlFor='image'>Image:</label>
                                        <input
                                            type='text'
                                            name='image'
                                            id='image'
                                            className='form-control'
                                           
                                            required
                                           
                                        />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <button type="submit" className="btn btn-ligth">SAVE</button>
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
        </>
    );
};

export default FormProjectUpdate;
