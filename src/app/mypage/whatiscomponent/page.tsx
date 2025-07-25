"use client";
import React, { useState, useEffect } from "react";
import ButtonUsage from "@/components/mui/button";
import BasicTextFields from "@/components/mui/textfield/textinput-basic";
import ValidationTextFields from "@/components/mui/textfield/textinput-validation";
import SelectTextFields from "@/components/mui/textfield/select-textfield";

export default function  WhatiscomponentPage() {
     const [text, setText] = useState("");
     const [phone, setPhone] = useState("");
     const [validationError, setValidationError] = useState("");
        const [selectedOption, setSelectedOption] = useState("");
     const handleValidationChange = (value: string) => {
            if (!/^\d+$/.test(value)) {
                setValidationError("Only numbers are allowed");
            } else {
                setValidationError("");
            }
     };
     useEffect(() => {
         handleValidationChange(phone);
        }, [phone]);
  return (
    <div>
      <p>WhatiscomponentPage</p>
      <ButtonUsage />
      <BasicTextFields value={text} variant="standard" label="name" id="name-input" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} />
        <p>Input Value: {text}</p>
        <ValidationTextFields value={phone} label="phone number" variant="outlined" id="validation-input" inputError={validationError} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)} />
    <p>Phone Value: {phone}</p>
    <SelectTextFields
  label="เลือกภาษา"
  variant="outlined"
  id="select-language"
  value={selectedOption}
  select={true}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectedOption(e.target.value)}
  options={[
    { value: "typescript", label: "TypeScript" },
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
  ]}
/>
<p>Selected: {selectedOption}</p>
    </div>
  );
};

