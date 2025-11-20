export default function Preview({ details }) {
  return (
    <div className="previewDivContainer">
      <div className="printBtnDiv">
        <button
          className="print"
          onClick={() => {
            window.print();
          }}
        >
          Print(Doesn't work)
        </button>
      </div>

      <div id="printable" className="previewDiv">
        <div className="previewContact">
          <h1>{`${details.personalInformation.firstName || "Example"} ${
            details.personalInformation.lastName || "Smith"
          }`}</h1>
          <div className="email contactContiner ">
            <div className="previewContainer">
              <img src="/assets/icons/email.svg" alt="" />
              <p>
                {details.personalInformation.email || "examplesmith@gmail.com"}
              </p>
            </div>
          </div>
          <div className="phone contactContiner ">
            <div className="previewContainer">
              <img src="/assets/icons/phone.svg" alt="" />
              <p>{details.personalInformation.phoneNumber || "31415-68735"}</p>
            </div>
          </div>
          <div className="address contactContiner ">
            <div className="previewContainer">
              <img src="/assets/icons/address.svg" alt="" />
              <p>
                {details.personalInformation.address ||
                  "4/A, Example street, somewhere"}
              </p>
            </div>
          </div>
          <div className="Website contactContiner ">
            <div className="previewContainer">
              <img src="/assets/icons/web.svg" alt="" />
              <p>
                <a
                  href={
                    details.personalInformation.website || "examplesmith.com"
                  }
                >
                  {details.personalInformation.website || "examplesmith.com"}
                </a>
              </p>
            </div>
          </div>

          <div className="addDetails addDetailsContainer contactContainer">
            {Object.keys(details.personalInformation.additionalPersonalInfo)
              .length > 0 &&
              Object.keys(
                details.personalInformation.additionalPersonalInfo
              ).map((infoID) => {
                const infoObj =
                  details.personalInformation.additionalPersonalInfo[infoID];
                return (
                  <div className="previewContainer" key={`preview_${infoID}`}>
                    <strong>{infoObj.title || "Title"}:</strong>
                    {infoObj.desc || "Description"}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="previewEducation">
          {Object.keys(details.educatonalInformations).length > 0 && (
            <u>
              <h2 className="previewEduTitle">Educational Information</h2>
            </u>
          )}

          {Object.keys(details.educatonalInformations).length > 0 &&
            Object.keys(details.educatonalInformations).map((infoID) => {
              const infoObj = details.educatonalInformations[infoID];
              return (
                <div className="previewEduContainer" key={`preview_${infoID}`}>
                  <div className="previewDateContaner">
                    <div className="previewContainer previewContainerStarted">
                      {infoObj.started || "05-11-2014"}
                    </div>
                    <div className="previewContainer previewContainerGraduated">
                      {infoObj.graduated
                        ? `— ${infoObj.graduated}`
                        : "— Present"}
                    </div>
                  </div>
                  <div className="previewEduDetails">
                    <div className="previewContainer previewContainerDegree">
                      {infoObj.degree || "Some degree"}
                    </div>
                    <div className="previewContainer previewContainerInstitution">
                      {infoObj.institution || "Example High School"}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="previewWork">
          {Object.keys(details.workInformations).length > 0 && (
            <u>
              <h2 className="previewEduTitle">Work Experience</h2>
            </u>
          )}

          {Object.keys(details.workInformations).length > 0 &&
            Object.keys(details.workInformations).map((infoID) => {
              const infoObj = details.workInformations[infoID];
              return (
                <div className="previewWorkContainer" key={`preview_${infoID}`}>
                  <div className="previewDateContaner">
                    <div className="previewContainer">
                      {infoObj.startingYear || "06-05-2018"}
                    </div>
                    <div className="previewContainer">
                      {infoObj.endingYear
                        ? `— ${infoObj.endingYear}`
                        : "— Present"}
                    </div>
                  </div>
                  <div className="previewWorkDetails">
                    <div className="previewContainer previewContainerPosition">
                      {infoObj.position || "Example role"}
                    </div>
                    <div className="previewContainer previewContainerCompany">
                      {infoObj.company || "Example company"}
                    </div>
                    <div className="previewContainer previewContainerContribution">
                      {infoObj.contribution || "I did so much haha"}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        {/* <div className="previewED">
        <pre>{JSON.stringify(details, null, 2)}</pre>
      </div> */}
      </div>
    </div>
  );
}
