import React, { useState } from "react";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";

const Cases = ({ pictures, dimensions, setPictures }) => {
  const handleChangePicture = (id) => {
    let arr = [...pictures];
    const obj = arr.find((picture) => picture.id === id);
    let [first, ...rest] = obj.img;
    obj.img = [...rest, first];
    setPictures(arr);
  };

  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          {/* <div className="cases-arrow prev disabled">
            <CasesPrev />
          </div>
          <div className="cases-arrow next">
            <CasesNext />
          </div> */}
        </div>
        <div className="row">
          {dimensions?.width >= "425" ? (
            pictures.map((picture) => (
              <div className="case" key={picture.id}>
                <div
                  className="case-details"
                  onClick={() => handleChangePicture(picture.id)}
                >
                  {/* <span>{caseItem.subtitle}</span>
                  <h2>{caseItem.title}</h2> */}
                </div>
                <div className="case-image">
                  <img src={`${picture?.img[0]}.jpg`} alt={picture.title} />
                </div>
              </div>
            ))
          ) : (
            <div className="case" key={pictures[0].id}>
              <div className="case-details">
                {/* <span>{caseItem.subtitle}</span>
            <h2>{caseItem.title}</h2> */}
              </div>
              <div className="case-image">
                <img
                  src={`${pictures[0].img[0]}.jpg`}
                  alt={pictures[0].title}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cases;
