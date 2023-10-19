import React from 'react';
import './Projects.scss';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import { useState } from 'react';

const TableSkill = () => {
    const skills = useSelector(state => state.skills.skills);
    //console.log('skills :>> ', skills);
    const [input, setInput] = useState({
        name: '',
        image: '',
    });
    
    const handleChange = (e) => {
        setInput({
            ...state,
            [e.target.name]: e.target.value
        })
    }


  return (
    <div className='accordion mt-4' id='accordionSkill'>
        {/* Show Skill */}
        <div className="accordion-item mb-2">
            <h2 className="accordion-header" id='headingOne'>
                <button className="accordion-button"
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#showSkill'
                    aria-expanded='false'
                    aria-controls='collapseOne'
                >
                    SHOW SKILL
                </button>
            </h2>
            <div id='showSkill'
                className="accordion-collapse collapse"
                aria-labelledby='headingOne'
                data-bs-parent='#accordionSkill'
            >
                <div className="accordion-body">
                    <div className='attributes'>
                        <table className="table table-group-divider">
                            <thead>
                                <tr>
                                    <th scope='col'>ID</th>
                                    <th scope='col'>Image</th>
                                    <th scope='col'>Skill</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    skills && skills.map(s => (
                                        <Fragment key={s.id}>
                                            <tr>
                                                <th scope='row'>{s.id}</th>
                                                <td><img src="" alt={s.name} /></td>
                                                <td>{s.name}</td>
                                                <td>
                                                    <button className="btn btn-light">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="15"
                                                            height="15"
                                                            fill="currentColor"
                                                            className="bi bi-trash"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        </Fragment>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        {/* Add Skill */}
        <div className="accordion-item">
            <h2 className="accordion-header" id='headingTwo'>
                <button className="accordion-button"
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#addSkill'
                    aria-expanded='false'
                    aria-controls='collapseTwo'
                >
                    ADD SKILL
                </button>
            </h2>
            <div id="addSkill"
                className='accordion-collapse collapse'
                aria-labelledby='headingTwo'
                data-bs-parent='#accordionSkill'
            >
                <div className="accordion-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name" className="labelForm">Skill Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                className='form-control'
                                required
                                onChange={handleChange}
                            />

                            <label htmlFor="image" className="labelForm">Skill Image</label>
                            <input 
                                type="url" 
                                name="image" 
                                id="image" 
                                className='form-control'
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button type="submit" className="btn btn-ligth">SAVE</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default TableSkill
