import React from "react";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";
import Button from "../components/Button";

const Project = ({
  application,
  applicationPictureCount,
  setApplicationPictureCount,
}) => {
  const handlePictureRight = () => {
    let length = application.img.length;
    let count = applicationPictureCount;
    count += 1;
    setApplicationPictureCount(count);
    if (count === length) {
      setApplicationPictureCount(0);
    }
  };

  const handlePictureLeft = () => {
    let length = application.img.length;
    let count = applicationPictureCount;
    count -= 1;
    setApplicationPictureCount(count);
    if (count === -1) {
      setApplicationPictureCount(length - 1);
    }
  };

  return (
    <div className="project">
      {/* <h1>{application.title}</h1> */}
      {/* <div className="projects__buttons">
        <Button title="info?" />
        <Button title="video?" />
      </div> */}
      <div className="case-image">
        <div className="arrows">
          <div onClick={handlePictureLeft} className="cases-arrow prev">
            <CasesPrev />
          </div>
          <div onClick={handlePictureRight} className="cases-arrow next">
            <CasesNext />
          </div>
        </div>
        <div className="right-container">
          <div className="project-desc">
            <span>{application.desc}</span>
          </div>
          {/* <div>
            <Button title="more" link={application.link} />
          </div> */}
        </div>
        <div className="image-container">
          <img
            src={`${application?.img[applicationPictureCount]}`}
            alt={application?.title}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
