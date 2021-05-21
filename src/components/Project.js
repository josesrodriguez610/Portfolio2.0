import React from "react";
import Button from "./Button";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";

const Project = ({ application }) => {
  const handlePicture = () => {};

  return (
    <div className="project">
      <h1>{application.title}</h1>
      <div className="projects__buttons">
        <Button title="info?" />
        <Button title="video?" />
      </div>
      <div className="case-image">
        <div className="cases-arrow prev disabled">
          <CasesPrev />
        </div>
        <div className="cases-arrow next">
          <CasesNext />
        </div>
        <img
          // style={{
          //   width: "100vw",
          //   height: "50vh",
          //   objectFit: "cover",
          // }}
          src={`${application?.img[0]}.jpg`}
          alt={application?.title}
        />
      </div>
    </div>
  );
};

export default Project;
