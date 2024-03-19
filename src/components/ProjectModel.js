import React, { useRef } from "react";
import useOutsideClick from "../hooks/useClickOutside";

const ProjectModel = ({ project, setIsModalOpen }) => {

  const { title, image, techStack, liveurl, githuburl } = project;
  const modalRef = useRef(null);

  // Call the useOutsideClick hook
  useOutsideClick(modalRef, () => setIsModalOpen(false));
  console.log(title);
  console.log(githuburl);

  return (
    <div className="project-container">
      <div className="project-card" ref={modalRef}>
        <img
          src={image.url}
          alt={title}
          className="project-image"
          // onClick={() => setIsModalOpen(false)}
        />
        <div className="project-info">
          <div className="project-desk">
            <h1 className="">{title}</h1>
            <div>
              <a href={liveurl} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-box-arrow-up-right project-icon " />
              </a>

              <a href={githuburl} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github project-icon" />
              </a>
            </div>
          </div>
          <div className="project-stack">
            <h3 className=" tech-title">Techstack:</h3>
            <p className="project-tech-stack">
              {techStack.map((tech, index) => (
                <span key={index} className="project-tech">
                  {tech}
                </span>
              ))}
            </p>
          </div>
          <div className="project-button-container">
            {/* {liveurl && ( */}

            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModel;
