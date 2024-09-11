import React, { useState } from "react";
import cross from "../../assets/times.svg";

const MscModal = ({ title, body, buttonOne, buttonTwo }) => {
  const [triggerModal, setTriggerModal] = useState("hidden");

  const toggleModal = () => {
    setTriggerModal((prev) => (prev === "hidden" ? "" : "hidden"));
  };

  return (
    <>
      <button onClick={toggleModal} className="msc-btn msc-btn-blue-solid">
        Trigger Modal
      </button>

      <div className={`msc-modal-bg ${triggerModal}`}>
        <div className="msc-modal">
          <div className="msc-modal-header">
            <h4 className="msc-modal-title">{title}</h4>
            <button id="modalClsBtn" onClick={toggleModal}>
              <img src={cross} className="msc-modal-close" />
            </button>
          </div>
          <div className="msc-modal-body">
            <p className="msc-modal-p">{body}</p>
          </div>
          <div className="msc-modal-footer">
            <button
              onClick={toggleModal}
              id="cancelBtn"
              className="msc-btn msc-btn-blue-solid w-full"
            >
              {buttonOne}
            </button>
            <button
              onClick={toggleModal}
              className="msc-btn msc-btn-blue-outline w-full"
            >
              {buttonTwo}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MscModal;
