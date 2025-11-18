import { useState } from "react";

export default function EducationDiv({ setdetails, fieldID, handleEdDelete }) {
  let [currentValue, setCurrentValue] = useState({
    institution: "",
    degree: "",
    started: "",
    graduated: "",
  });

  return (
    <div className="InstitutionField">
      <div className="InstitutionContainer">
        <div className="InputContainer">
          <label htmlFor="Institution">Institution</label>
          <input
            type="text"
            id="InputInstitution"
            name="institution"
            value={currentValue.institution}
            onChange={(event) => {
              setCurrentValue((prev) => ({
                ...prev,
                institution: event.target.value,
              }));

              setdetails((prev) => ({
                ...prev,
                educatonalInformations: {
                  ...prev.educatonalInformations,
                  [fieldID]: {
                    ...prev.educatonalInformations[fieldID],
                    institution: event.target.value,
                  },
                },
              }));
            }}
          />
        </div>
        <div className="InputContainer">
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            id="InputDegree"
            name="degree"
            value={currentValue.degree}
            onChange={(event) => {
              setCurrentValue((prev) => ({
                ...prev,
                degree: event.target.value,
              }));
              setdetails((prev) => ({
                ...prev,
                educatonalInformations: {
                  ...prev.educatonalInformations,
                  [fieldID]: {
                    ...prev.educatonalInformations[fieldID],
                    degree: event.target.value,
                  },
                },
              }));
            }}
          />
        </div>
        <div className="InputContainer">
          <label htmlFor="started">Started</label>
          <input
            type="date"
            id="InputStarted"
            name="started"
            value={currentValue.started}
            onChange={(event) => {
              setCurrentValue((prev) => ({
                ...prev,
                started: event.target.value,
              }));
              setdetails((prev) => ({
                ...prev,
                educatonalInformations: {
                  ...prev.educatonalInformations,
                  [fieldID]: {
                    ...prev.educatonalInformations[fieldID],
                    started: event.target.value,
                  },
                },
              }));
            }}
          />
        </div>
        <div className="InputContainer">
          <label htmlFor="graduated">Graduated</label>
          <input
            type="date"
            id="InputGraduated"
            name="graduated"
            value={currentValue.graduated}
            onChange={(event) => {
              setCurrentValue((prev) => ({
                ...prev,
                graduated: event.target.value,
              }));
              setdetails((prev) => ({
                ...prev,
                educatonalInformations: {
                  ...prev.educatonalInformations,
                  [fieldID]: {
                    ...prev.educatonalInformations[fieldID],
                    graduated: event.target.value,
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
          handleEdDelete(e, fieldID);
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
