import React, { ChangeEvent, useState } from "react";
import "./CandidatePage.css";
import H2RTextBox from "../../../common/components/H2RTextBox/H2RTextBox";
import { EnumTextBoxType } from "../../../common/components/H2RTextBox/H2RTextBox.enum";
import H2RDatePicker from "../../../common/components/H2RDatePicker/H2RDatePicker";
import { CandidateDTO } from "../../../common/types/common.dto.types";
import Button from "@mui/material/Button";
import H2RCheckBox from "../../../common/components/H2RCheckBox/H2RCheckBox";
import { Grid, RadioGroup } from "@mui/material";
import H2RRadioButton from "../../../common/components/H2RRadioButton/H2RRadioButton";
import { EnumAttributeType } from "../../../common/components/H2RRadioButton/H2RRadioButton.enum";

const CandidatePage = () => {
  // initial page state object
  const initialState: CandidateDTO = {
    Candidate: {
      FirstName: "",
      LastName: "",
      DBO: "",
      Option1: false,
      Designation: 1,
    },
  };

  const [candidatePageState, setCandidatePageState] = useState(initialState);

  const handleTextBoxChange = (name: string, value: any) => {
    setCandidatePageState((values) => {
      return {
        ...values,
        Candidate: {
          ...values.Candidate,
          [name]: value,
        },
      };
    });
  };

  const handleDatePickerChange = (name: string, value: any) => {
    setCandidatePageState((values) => {
      return {
        ...values,
        Candidate: {
          ...values.Candidate,
          [name]: value,
        },
      };
    });
  };

  const handleCheckboxChange = (name: string, isChecked: boolean) => {
    setCandidatePageState((values) => {
      return {
        ...values,
        Candidate: {
          ...values.Candidate,
          [name]: isChecked,
        },
      };
    });
  };

  const handleGenderSelection = (name: string, value: any) => {
    setCandidatePageState((values) => {
      return {
        ...values,
        Candidate: {
          ...values.Candidate,
          [name]: value,
        },
      };
    });
  };
  const handleSaveButtonClick = () => {
    console.log("Candidate Data:", candidatePageState);
  };

  return (
    <div className="container">
      <h2>Candidate Page</h2> <br />
      <div className="form-group lg-20">
        <H2RTextBox
          Id="firstName"
          Label="First Name"
          Name="FirstName"
          Value={candidatePageState.Candidate.FirstName}
          Type={EnumTextBoxType.Text}
          Required={true}
          onTextBoxChange={(name, value) => handleTextBoxChange(name, value)}
        ></H2RTextBox>

        <H2RTextBox
          Id="lastName"
          Label="last Name"
          Name="LastName"
          Value={candidatePageState.Candidate.LastName}
          Type={EnumTextBoxType.Text}
          Required={true}
          onTextBoxChange={(name, value) => handleTextBoxChange(name, value)}
        ></H2RTextBox>

        <H2RDatePicker
          Label={"Date of Birth"}
          Name={"DBO"}
          Type={2}
          Value={candidatePageState.Candidate.DBO}
          onDateChange={handleDatePickerChange}
        ></H2RDatePicker>

        <fieldset>
          <legend>Checkbox Options</legend>
          <div className="form-group-sub">
            <H2RCheckBox
              Id={""}
              Name={"Option1"}
              ClassName={""}
              onCheckBoxChange={handleCheckboxChange}
              Label={"Option 1"}
            ></H2RCheckBox>
          </div>
        </fieldset>

        <fieldset>
          <legend>Designation</legend>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <RadioGroup
              row
              name="Designation"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleGenderSelection(
                  event.target.name,
                  parseInt(event.target.value)
                )
              }
            >
              <Grid container columns={12} spacing="1">
                <Grid
                  item
                  lg={3}
                  md={3}
                  sm={3}
                  xs={3}
                  className="inline-2-elements"
                >
                  <H2RRadioButton
                    Name={"Designation"}
                    Value={EnumAttributeType.SE.toString()}
                    ClassName={"default-label"}
                    Label={"SE"}
                  ></H2RRadioButton>
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={4}
                  sm={4}
                  xs={4}
                  className="inline-2-elements"
                >
                  <H2RRadioButton
                    Name={"Designation"}
                    Value={EnumAttributeType.QA.toString()}
                    ClassName={"default-label"}
                    Label={"QA"}
                  ></H2RRadioButton>
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={4}
                  sm={4}
                  xs={4}
                  className="inline-2-elements"
                >
                  <H2RRadioButton
                    Name={"Designation"}
                    Value={EnumAttributeType.PM.toString()}
                    ClassName={"default-label"}
                    Label={"PM"}
                  ></H2RRadioButton>
                </Grid>
              </Grid>
            </RadioGroup>
          </Grid>
        </fieldset>

        <br />
        <Button variant="contained" onClick={handleSaveButtonClick}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default CandidatePage;
