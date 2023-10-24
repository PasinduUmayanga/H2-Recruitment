import React, { useState } from "react";
import "./TestPage.css";
import H2RTextBox from "../../../common/components/H2RTextBox/H2RTextBox";
import { BaseDTO } from "../../../common/types/common.dto.types";
import { EnumTextBoxType } from "../../../common/components/H2RTextBox/H2RTextBox.enum";
import { Button } from "@mui/material";
import axios from "axios";
import H2RDatePicker from "../../../common/components/H2RDatePicker/H2RDatePicker";

const TestPage = () => {
  const initialState = {
    Test: {
      FirstName: "",
      MiddleName: "",
      LastName: "",
      DBO: "",
    } as BaseDTO,
  };

  const [testPageState, setTestPageState] = useState(initialState);

  const handleSaveButtonClick = () => {
    const testCandidateData = testPageState.Test;
    console.log(testCandidateData);
    axios.post(
      "https://localhost:7110/api/H2R/TestCandidate",
      testCandidateData
    );
  };

  const handleTextBoxChange = (name: string, value: any) => {
    setTestPageState((values) => {
      return {
        ...values,
        Test: {
          ...values.Test,
          [name]: value,
        },
      };
    });
  };

  const handleDatePickerChange = (name: string, value: any) => {
    setTestPageState((values) => {
      return {
        ...values,
        Test: {
          ...values.Test,
          [name]: value,
        },
      };
    });
  };

  return (
    <div className="container">
      <div>TestPage</div>
      <br></br>
      <H2RTextBox
        Name="FirstName"
        Value={testPageState.Test.FirstName}
        Type={EnumTextBoxType.Text}
        Label="First Name"
        onTextBoxChange={(name, value) => handleTextBoxChange(name, value)}
      ></H2RTextBox>
      <H2RTextBox
        Name="MiddleName"
        Value={testPageState.Test.MiddleName}
        Type={EnumTextBoxType.Text}
        Label="Middle Name"
        onTextBoxChange={(name, value) => handleTextBoxChange(name, value)}
      ></H2RTextBox>
      <H2RTextBox
        Name="LastName"
        Value={testPageState.Test.LastName}
        Type={EnumTextBoxType.Text}
        Label="Last Name"
        onTextBoxChange={(name, value) => handleTextBoxChange(name, value)}
      ></H2RTextBox>
      <H2RDatePicker
        Label={"Date of Birth"}
        Name={"DBO"}
        Type={2}
        Value={testPageState.Test.DBO}
        onDateChange={handleDatePickerChange}
        DisableFuture={true}
      ></H2RDatePicker>
      <br></br>
      <Button
        variant="contained"
        startIcon=""
        size="large"
        onClick={handleSaveButtonClick}
      >
        Save
      </Button>
    </div>
  );
};

export default TestPage;
