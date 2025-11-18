import { useState } from "react";

export function InputField({
  label = "Input Label",
  name = "InputName",
  type = "text",
  updateDetails,
}) {
  let [currentValue, setCurrentValue] = useState("");

  return (
    <div className="InputContainer">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={`Input${name}`}
        name={name}
        value={currentValue}
        onChange={(event) => {
          setCurrentValue(event.target.value);
          updateDetails(event.target.value);
        }}
      />
    </div>
  );
}

export function AddInputField({ updateDetails, fieldID, handleDelete }) {
  let [currentValue, setCurrentValue] = useState({ title: "", desc: "" });

  return (
    <div className="AddInputField fieldID">
      <div className="AddInputContainer">
        <input
          type="text"
          placeholder="Label"
          value={currentValue.title}
          onChange={(event) => {
            const newValue = { ...currentValue, title: event.target.value };
            setCurrentValue(newValue);
            updateDetails(newValue);
          }}
        />

        <input
          type="text"
          placeholder="Description"
          value={currentValue.desc}
          onChange={(event) => {
            const newValue = { ...currentValue, desc: event.target.value };
            setCurrentValue(newValue);
            updateDetails(newValue);
          }}
        />
      </div>
      <button
        className="addInputDeleteBtn"
        id={fieldID}
        onClick={(e) => handleDelete(e, fieldID)}
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
