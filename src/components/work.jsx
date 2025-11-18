import { useState } from "react";

export default function WorkDiv({ setdetails, fieldID, handleWorkDelete }) {
  let [currentValue, setCurrentValue] = useState({
    company: "",
    position: "",
    experienceYear: "",
  });

  return (
    <div className="workFieldDiv">
      <div className="workFieldContainer">
        {/*  */}
        <div className="InputContainer">
          <label htmlFor="Company">Company</label>
          <input
            type="text"
            id="InputCompany"
            name="company"
            value={currentValue.company}
            onChange={(event) => {
              setCurrentValue((prev) => ({
                ...prev,
                company: event.target.value,
              }));

              setdetails((prev) => ({
                ...prev,
                workInformations: {
                  ...prev.workInformations,
                  [fieldID]: {
                    ...prev.workInformations[fieldID],
                    company: event.target.value,
                  },
                },
              }));
            }}
          />
        </div>
        <div className="InputContainer">
          <label htmlFor="Position">Position</label>
          <input
            type="text"
            id="InputPosition"
            name="position"
            value={currentValue.position}
            onChange={(event) => {
              setCurrentValue((prev) => ({
                ...prev,
                position: event.target.value,
              }));

              setdetails((prev) => ({
                ...prev,
                workInformations: {
                  ...prev.workInformations,
                  [fieldID]: {
                    ...prev.workInformations[fieldID],
                    position: event.target.value,
                  },
                },
              }));
            }}
          />
        </div>
        <div className="InputContainer">
          <label htmlFor="startingYear">From</label>
          <input
            type="date"
            id="InputStartngYear"
            name="startingYear"
            value={currentValue.startingYear}
            onChange={(event) => {
              setCurrentValue((prev) => ({
                ...prev,
                startingYear: event.target.value,
              }));

              setdetails((prev) => ({
                ...prev,
                workInformations: {
                  ...prev.workInformations,
                  [fieldID]: {
                    ...prev.workInformations[fieldID],
                    startingYear: event.target.value,
                  },
                },
              }));
            }}
          />
        </div>
        <div className="InputContainer">
          <label htmlFor="endingYear">To</label>
          <input
            type="date"
            id="InputEndingYear"
            name="endingYear"
            value={currentValue.endingYear}
            onChange={(event) => {
              setCurrentValue((prev) => ({
                ...prev,
                endingYear: event.target.value,
              }));

              setdetails((prev) => ({
                ...prev,
                workInformations: {
                  ...prev.workInformations,
                  [fieldID]: {
                    ...prev.workInformations[fieldID],
                    endingYear: event.target.value,
                  },
                },
              }));
            }}
          />
        </div>
        <div className="InputContainer">
          <label htmlFor="contribution">Contribution</label>
          <textarea
            id="InputContribution"
            name="contribution"
            value={currentValue.contribution}
            onChange={(event) => {
              setCurrentValue((prev) => ({
                ...prev,
                contribution: event.target.value,
              }));

              setdetails((prev) => ({
                ...prev,
                workInformations: {
                  ...prev.workInformations,
                  [fieldID]: {
                    ...prev.workInformations[fieldID],
                    contribution: event.target.value,
                  },
                },
              }));
            }}
          />
        </div>
      </div>
      <button
        className="addInputDeleteBtn"
        onClick={(e) => {
          e.preventDefault();
          handleWorkDelete(e, fieldID);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
        >
          <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
        </svg>
      </button>
    </div>
  );
}
