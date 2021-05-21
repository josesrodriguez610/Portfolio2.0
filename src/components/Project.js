import React, { useState } from "react";
import Button from "./Button";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";

const Project = ({
  application,
  applicationPictureCount,
  setApplicationPictureCount,
}) => {
  const [disabledRight, setDisabledRight] = useState("");
  const [disabledLeft, setDisabledLeft] = useState("disabled");

  console.log(application, "<= project application");
  const handlePictureRight = () => {
    let length = application.img.length - 1;

    let count = applicationPictureCount;
    count += 1;
    setDisabledLeft("");
    setApplicationPictureCount(count);
    if (count === length) {
      setDisabledRight("disabled");
    }
  };

  const handlePictureLeft = () => {
    let count = applicationPictureCount;
    if (count !== 0) {
      setDisabledLeft("");
      count -= 1;
      setApplicationPictureCount(count);
    }
    if (count === 0) {
      setDisabledLeft("disabled");
      setDisabledRight("");
    }
  };

  return (
    <div className="project">
      <h1>{application.title}</h1>
      <div className="projects__buttons">
        <Button title="info?" />
        <Button title="video?" />
      </div>
      <div className="case-image">
        <div
          onClick={handlePictureLeft}
          className={`cases-arrow prev ${disabledLeft}`}
        >
          <CasesPrev />
        </div>
        <div
          onClick={handlePictureRight}
          className={`cases-arrow next ${disabledRight}`}
        >
          <CasesNext />
        </div>
        <img
          style={{
            width: "100vw",
            height: "50vh",
            objectFit: "cover",
          }}
          src={`${application?.img[applicationPictureCount]}.jpg`}
          alt={application?.title}
        />
      </div>
    </div>
  );
};

export default Project;
