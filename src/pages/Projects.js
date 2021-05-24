import React, { useState } from "react";
import Project from "../components/Project";
import { applications } from "../assets/utils/pictures.js";

function Projects({ dimensions }) {
  const [application, setApplication] = useState(applications[0]);
  const [applicationPictureCount, setApplicationPictureCount] = useState(0);

  const handlePickApplication = (application) => {
    setApplication(application);
    setApplicationPictureCount(0);
  };

  return (
    <div className="page">
      <div className="projects">
        <div className="projects__container">
          <div className="list__container">
            {applications?.map((application) => (
              <h1
                key={application.title}
                onClick={() => handlePickApplication(application)}
                className="project__title"
              >
                {application.title}
              </h1>
            ))}
          </div>
          <Project
            applicationPictureCount={applicationPictureCount}
            setApplicationPictureCount={setApplicationPictureCount}
            application={application}
            dimensions={dimensions}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
