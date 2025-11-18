import Form from "./components/Form";
import Preview from "./components/Preview";
import { useState } from "react";

export default function App() {
  let [details, setdetails] = useState({
    personalInformation: {
      additionalPersonalInfo: {},
    },
    educatonalInformations: {
      educatonalInfo_1: {},
    },
    workInformations: {
      workInfo_1: {},
    },
  });
  return (
    <div className="app">
      <Form details={details} setdetails={setdetails} />
      <Preview details={details} />
    </div>
  );
}
