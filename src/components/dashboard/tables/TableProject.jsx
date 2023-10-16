import React from "react";
import { Fragment } from "react";
import "./Projects.scss";
import { useSelector } from "react-redux";

const TableProject = () => {
  const projects = useSelector(state => state.projects.projects);


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
                                                  <td>
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
                                                        width="16"
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
                                                        width="16"
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
                  <form>
                    <div className="form-group">
                      <label htmlFor="name" className="labelForm">Project Name:</label>
                      <input 
                        type="text" 
                        name="name"
                        id="name"
                        className="form-control" 
                        required
                      />
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
