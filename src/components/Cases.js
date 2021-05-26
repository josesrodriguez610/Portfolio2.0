import React from "react";
import { gsap } from "gsap";

const Cases = ({
  pictures,
  stateProfileImages,
  dimensions,
  setPictures,
  phoneHomePictureCount,
  setPhoneHomePictureCount,
}) => {
  let tl = gsap.timeline();

  const handleChangePicture = (id) => {
    tl.from(`.image-${id}`, {
      // opacity: 2.5,
      duration: 1,
      scale: 1.1,
      ease: "expo.inOut",
      delay: -3,
      stagger: {
        amount: 1.4,
      },
    });
    let arr = [...pictures];
    const obj = arr.find((picture) => picture.id === id);
    let [first, ...rest] = obj.img;
    obj.img = [...rest, first];
    setPictures(arr);
  };

  const handleChangePictureInPhone = () => {
    tl.from(`.phone-${stateProfileImages[phoneHomePictureCount].id}`, {
      duration: 2,
      scale: 0.1,
      ease: "expo.inOut",
      delay: -3,
      stagger: {
        amount: 0.4,
      },
    });
    let count = phoneHomePictureCount;
    count += 1;
    setPhoneHomePictureCount(count);
    if (count === stateProfileImages.length) {
      setPhoneHomePictureCount(0);
    }

    console.log(`.phone-${phoneHomePictureCount}`);
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
                <div className={`case-image image-${picture.id}`}>
                  <img src={`${picture?.img[0]}.jpg`} alt={picture.title} />
                </div>
              </div>
            ))
          ) : (
            <div
              className="case"
              key={stateProfileImages[phoneHomePictureCount].id}
            >
              <div
                className="case-details"
                onClick={handleChangePictureInPhone}
              >
                {/* <span>{caseItem.subtitle}</span>
            <h2>{caseItem.title}</h2> */}
              </div>
              <div
                className={`case-image phone-${stateProfileImages[phoneHomePictureCount].id}`}
              >
                <img
                  src={`${stateProfileImages[phoneHomePictureCount].img}.jpg`}
                  alt={stateProfileImages[phoneHomePictureCount].img}
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
