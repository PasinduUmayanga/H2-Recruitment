import React, { useState } from "react";
import "./CandidatePage.css";
import H2RTextBox from "../../../common/components/H2RTextBox/H2RTextBox";
import { EnumTextBoxType } from "../../../common/components/H2RTextBox/H2RTextBox.enum";
import H2RDatePicker from "../../../common/components/H2RDatePicker/H2RDatePicker";
import { CandidateDTO } from "../../../common/types/common.dto.types";
import Button from "@mui/material/Button";

const CandidatePage = () => {
  // initial page state object
  const initialState: CandidateDTO = {
    Candidate: { FirstName: "", LastName: "", DBO: "" },
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

  const handleDatePickerChange = () => {};

  const handleSaveButtonClick = () => {
    console.log("Candidate Data:", candidatePageState);
  };

  return (
    <div className="container">
      <h2>Candidate Page</h2> <br />
      <form>
        <div className="form-group lg-20">
          <H2RTextBox
            Id="firstName"
            Label="First Name"
            Name="FirstName"
            Value={candidatePageState.Candidate.FirstName}
            Type={EnumTextBoxType.Text}
            onTextBoxChange={(name, value) => handleTextBoxChange(name, value)}
          ></H2RTextBox>

          <H2RTextBox
            Id="lastName"
            Label="last Name"
            Name="LastName"
            Value={candidatePageState.Candidate.LastName}
            Type={EnumTextBoxType.Text}
            onTextBoxChange={(name, value) => handleTextBoxChange(name, value)}
          ></H2RTextBox>

          <H2RDatePicker
            Label="Date of Birth"
            Name="DBO"
            Type={2}
            Value={candidatePageState.Candidate.DBO}
            onDateChange={handleDatePickerChange}
          ></H2RDatePicker>

          <Button variant="contained" onClick={handleSaveButtonClick}>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CandidatePage;
