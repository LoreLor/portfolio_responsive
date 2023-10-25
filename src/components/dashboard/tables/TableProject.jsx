import React, { useState } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { addProject, allProjects } from "../../../store/actions/projects";
import { toast } from "react-toastify";
import SERVER from "../../../server/index"
import axios from "axios";
import "./Projects.scss";

const TableProject = () => {
      const projects = useSelector(state => state.projects.projects);
   
      const [inputs, setInputs] = useState({
          name:'',
          description:'',
          stack:'',
          deploy:'',
          github:'',
          demo:'',
          image:''
      });

      const handleChange = (e) => {
        setInputs({
          ...inputs,
          [e.target.name]: e.target.value
        })
      };

      const handleSubmit = async(e) => {
        e.preventDefault();
        if(Object.keys(inputs).length === 7 && inputs.values !== ''){
          let response = null
          try {
              response = await axios.post(`${SERVER}/project`, inputs)       
              if(response.data.message === 'Project Created'){
                setInputs({
                    name:'',
                    description:'',
                    stack:'',
                    deploy:'',
                    github:'',
                    demo:'',
                    image:''
                });
                toast.success(`${response.data.message}`, {
                  position:toast.POSITION.TOP_CENTER,
                  autoClose: 1500,
                  theme:'colored',
                });
                setTimeout(() => {
                  dispatch(allProjects())
                }, 1500)
              }
          } catch (error) {
              toast.error(console.log(error), {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500,
                theme: 'colored'
              }
            )
          }
        }
      }


    return (
      <>
        <div className="accordion" id="accordionProject">
            {/* Project-Show */}
            <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingOne">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#showProjects"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                    >
                        VIEW PROJECTS
                    </button>
                </h2>
                <div id="showProjects"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionProject"
                >
                  <div className="accordion-body">
                      <div className="attributes">
                          <table className="table table-group-divider">
                              <thead>
                                  <tr>
                                      <th scope="col">ID</th>
                                      <th scope="col">Image</th>
                                      <th scope="col">Project</th>
                                      <th scope="col">Description</th>
                                      <th scope="col">Stack</th>
                                      <th scope="col">Github</th>
                                      <th scope="col">Demo</th>
                                      <th scope="col">Actions</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {projects && projects.map((p) => (
                                          <Fragment key={p.id}>
                                              <tr>
                                                  <th scope="row">{p.id}</th>
                                                  <td className="img-zone">
                                                      <img
                                                          src={p.image}
                                                          alt={p.name}
                                                      />
                                                  </td>
                                                  <td>{p.name}</td>
                                                  <td>{p.description}</td>
                                                  <td>{p.stack}</td>
                                                  <td>{p.github}</td>
                                                  <td>{p.demo}</td>
                                                  <td>
                                                    <button className="btn btn-light"
                                                      
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
                                                          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                      </svg>
                                                    </button>
                                                    <br />
                                                    <button className="btn btn-light">
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="12"
                                                        height="16"
                                                        fill="currentColor"
                                                        className="bi bi-pencil-square"
                                                        viewBox="0 0 15 15"
                                                      >
                                                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                          <path
                                                            fillRule="evenodd"
                                                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                                          />
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
            
            {/* Project - Add */}
            <div className="accordion-item mb-2">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  type="button"
                  className="accordion-button collapsed"
                  data-bs-toggle='collapse'
                  data-bs-target='#addProject'
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  ADD PROJECT
                </button>
              </h2>
              <div id="addProject"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent='#accordionProject'
              >
                <div className="accordion-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name" className="labelForm">Project Name:</label>
                      <input 
                        type="text" 
                        name="name"
                        id="name"
                        className="form-control" 
                        required
                        onChange={handleChange}
                      />
                      <label htmlFor="description" className="labelForm">Description:</label>
                      <input 
                        type="text" 
                        name="description"
                        id="description"
                        className="form-control"
                        required
                        onChange={handleChange}
                      />
                      <label htmlFor="stack" className="labelForm">Stack:</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="stack"
                        id="stack"
                        required
                        onChange={handleChange}
                      />
                      <label htmlFor="deploy" className="labelForm">Deploy:</label>
                      <input 
                        type="text"
                        name="deploy"
                        id="deploy"
                        className="form-control"
                        required 
                        onChange={handleChange}
                      />
                      <label htmlFor="demo">Demo:</label>
                      <input 
                        type="text" 
                        name="demo"
                        id="demo"
                        className="form-control"
                        required
                        onChange={handleChange} 
                      />
                      <label htmlFor="image" className="labelForm">Image:</label>
                      <input 
                        type="text" 
                        name="image" 
                        id="image"
                        className="form-control"
                        required
                        onChange={handleChange}
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

      </>
    );
};

export default TableProject;
