import React, { useState } from "react";
import cross from "../../assets/times.svg";

const MscMailListModal = ({ description }) => {
  const [triggerModal, setTriggerModal] = useState("hidden");

  const toggleModal = () => {
    setTriggerModal((prev) => (prev === "hidden" ? "" : "hidden"));
  };

  return (
    <>
      <button onClick={toggleModal} className="msc-btn msc-btn-blue-solid">
        Trigger Mail List Modal C
      </button>

      <div className={`msc-modal-bg ${triggerModal}`}>
        <div className="h-fill w-full bg-white rounded-lg shadow-xl overflow-hidden flex flex-col place-content-stretch md:max-w-[720px]">
          <div className="flex py-5 px-4 font-bold text-white bg-primary-blue">
            <h2 className="text-center w-full text-[30px]">
              Join our mail list!
            </h2>
            <button id="modalClsBtn" className="size-5" onClick={toggleModal}>
              <i class="fa-solid fa-xmark text-[20px]"></i>
            </button>
          </div>
          <div class="flex flex-col items-center p-5 gap-8">
            <div class="flex flex-col gap-1 items-center">
              <p class="font-bold text-xl text-center">{description}</p>
              <p class="font-medium text-xs text-monochromes-grey italic">
                *Exclusions Apply
              </p>
            </div>

            <div class="relative w-full max-w-[17.5rem]">
              <input
                id="email"
                type="text"
                placeholder="Email Address"
                class="bg-white w-full h-10 px-4 py-3.5 text-sm rounded border !border-monochromes-grey_light placeholder-transparent disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed disabled:text-monochromes-grey_light hover:disabled:!border-[#e5e7eb] hover:enabled:!border-monochromes-main focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer"
              />
              <label
                for="email"
                class="bg-white absolute left-3.5 -top-[0.6rem] pt-[1px] px-[0.2rem] text-xs transition-all cursor-text peer-placeholder-shown:text-sm peer-placeholder-shown:text-monochromes-grey_light peer-placeholder-shown:top-2 peer-focus:-top-[0.6rem] peer-focus:text-[#212121] peer-focus:text-xs peer-focus:cursor-default peer-invalid:text-error-red peer-disabled:bg-off_white"
              >
                Email Address
              </label>
            </div>

            <div class="flex flex-col gap-2 items-center">
              <button class="py-1 px-4 h-10 rounded-full font-bold text-sm w-[200px] cursor-pointer min-w-24 md:min-w-32 text-white bg-primary-blue hover:bg-[#186DF5] active:bg-blue-700 disabled:text-white disabled:cursor-not-allowed disabled:bg-gray-300 focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#424242]">
                Subscribe
              </button>

              <button
                id="cancelBtn"
                onClick={toggleModal}
                class="bg-transparent w-[200px] text-primary-blue rounded-full h-10 hover:bg-primary-blue_xlight active:bg-[#0d3aa933] disabled:bg-transparent disabled:cursor-not-allowed disabled:text-monochromes-grey_light focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#424242] font-bold text-sm"
              >
                No Thanks
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MscMailListModal;