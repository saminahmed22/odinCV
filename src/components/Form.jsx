import { InputField, AddInputField } from "./inputField";
import EducationDiv from "./education";
import WorkDiv from "./work";

const GenUniqueID = () => {
  const ID = crypto.randomUUID();
  return ID;
};

export default function Form({ details, setdetails }) {
  const handleAddFields = (e) => {
    e.preventDefault();
    // need unique ids
    const ID = GenUniqueID();
    setdetails((prev) => ({
      ...prev,
      personalInformation: {
        ...prev.personalInformation,
        additionalPersonalInfo: {
          ...prev.personalInformation.additionalPersonalInfo,
          [`additionalPersonalInfo_${ID}`]: {
            title: "",
            desc: "",
          },
        },
      },
    }));
  };

  const handleDelete = (e, fieldID) => {
    e.preventDefault();

    setdetails((prev) => {
      const newDetails = { ...prev };
      delete newDetails.personalInformation.additionalPersonalInfo[fieldID];
      return newDetails;
    });
  };

  // will throw an error if no input was given as fields only registers when the first input was given
  const handleEdDelete = (e, fieldID) => {
    e.preventDefault();

    setdetails((prev) => {
      const newDetails = { ...prev };
      delete newDetails.educatonalInformations[fieldID];
      return newDetails;
    });
  };

  const handleWorkDelete = (e, fieldID) => {
    e.preventDefault();

    setdetails((prev) => {
      const newDetails = { ...prev };
      delete newDetails.workInformations[fieldID];
      return newDetails;
    });
  };

  const handleEdAddFields = (e) => {
    e.preventDefault();
    const ID = GenUniqueID();
    setdetails((prev) => ({
      ...prev,
      educatonalInformations: {
        ...prev.educatonalInformations,
        [`educatonalInfo_${ID}`]: {
          institution: "",
          degree: "",
          started: "",
          graduated: "",
        },
      },
    }));
  };

  const handleWorkAddFields = (e) => {
    e.preventDefault();
    const ID = GenUniqueID();
    setdetails((prev) => ({
      ...prev,
      workInformations: {
        ...prev.workInformations,
        [`workInformations_${ID}`]: {
          company: "",
          position: "",
          startingYear: "",
          endingYear: "",
          contribution: "",
        },
      },
    }));
  };

  return (
    <>
      <div className="formDiv">
        <form action="">
          <fieldset>
            <legend>Personal Information</legend>
            <InputField
              label="First Name"
              type="text"
              name="FirstName"
              updateDetails={(value) => {
                setdetails((prev) => ({
                  ...prev,
                  personalInformation: {
                    ...prev.personalInformation,
                    firstName: value,
                  },
                }));
              }}
            />
            <InputField
              label="Last Name"
              type="text"
              name="LastName"
              updateDetails={(value) => {
                setdetails((prev) => ({
                  ...prev,
                  personalInformation: {
                    ...prev.personalInformation,
                    lastName: value,
                  },
                }));
              }}
            />

            <InputField
              label="Email"
              type="email"
              name="Email"
              updateDetails={(value) => {
                setdetails((prev) => ({
                  ...prev,
                  personalInformation: {
                    ...prev.personalInformation,
                    email: value,
                  },
                }));
              }}
            />
            <InputField
              label="Phone Number"
              type="tel"
              name="PhoneNumber"
              updateDetails={(value) => {
                setdetails((prev) => ({
                  ...prev,
                  personalInformation: {
                    ...prev.personalInformation,
                    phoneNumber: value,
                  },
                }));
              }}
            />
            <InputField
              label="Address"
              type="text"
              name="Address"
              updateDetails={(value) => {
                setdetails((prev) => ({
                  ...prev,
                  personalInformation: {
                    ...prev.personalInformation,
                    address: value,
                  },
                }));
              }}
            />
            <InputField
              label="Website"
              type="url"
              name="Website"
              updateDetails={(value) => {
                setdetails((prev) => ({
                  ...prev,
                  personalInformation: {
                    ...prev.personalInformation,
                    website: value,
                  },
                }));
              }}
            />

            {Object.keys(
              details.personalInformation.additionalPersonalInfo
            ).map((id) => (
              <div className={"addInfoDiv"} key={id}>
                <AddInputField
                  updateDetails={(value) => {
                    setdetails((prev) => ({
                      ...prev,
                      personalInformation: {
                        ...prev.personalInformation,
                        additionalPersonalInfo: {
                          ...prev.personalInformation.additionalPersonalInfo,
                          [id]: {
                            title: value.title,
                            desc: value.desc,
                          },
                        },
                      },
                    }));
                  }}
                  fieldID={id}
                  handleDelete={handleDelete}
                />
              </div>
            ))}

            <button className="addInfoFieldBtn" onClick={handleAddFields}>
              Add additional field
            </button>
          </fieldset>
          <fieldset className="EDF">
            <legend>Educational Information</legend>

            {Object.keys(details.educatonalInformations).map((id) => (
              <div className={`addEDContaner`} key={id}>
                <EducationDiv
                  setdetails={setdetails}
                  fieldID={id}
                  handleEdDelete={handleEdDelete}
                />
              </div>
            ))}

            <button className="addInfoFieldBtn" onClick={handleEdAddFields}>
              Add additional field
            </button>
          </fieldset>
          <fieldset>
            <legend>Work Experience</legend>

            {Object.keys(details.workInformations).map((id) => (
              <div className={`addWorkContaner`} key={id}>
                <WorkDiv
                  setdetails={setdetails}
                  fieldID={id}
                  handleWorkDelete={handleWorkDelete}
                />
              </div>
            ))}

            <button className="addInfoFieldBtn" onClick={handleWorkAddFields}>
              Add additional field
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
