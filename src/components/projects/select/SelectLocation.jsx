import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { projectContext } from "../../../context/projectsContext";

function SelectLocation() {
  const { term, setTerm, locationOptions } = useContext(projectContext);

  return (
    <Select
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? "gray" : "gray",
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: state.isFocused ? "#864721" : "white",
          color: state.isFocused ? "white" : "black",
          cursor: "pointer",
          // ":hover": {
          //   color: "white",
          // }, // borderRadius: "20px",
        }),
        multiValue: (baseStyles) => ({
          ...baseStyles,

          backgroundColor: "#864721", // Background for selected options
        }),
        multiValueLabel: (baseStyles) => ({
          ...baseStyles,
          color: "white", // Text color of selected options
          // backgroundColor: "white",
        }),
        multiValueRemove: (baseStyles) => ({
          ...baseStyles,
          color: "white", // Color of the remove icon
          cursor: "pointer",
          ":hover": {
            backgroundColor: "transparent", // Background when hovering over the remove icon
          },
        }),
      }}
      isMulti
      name="colors"
      placeholder="Select Location"
      onChange={(data) => {
        const value = data.map((d) => d.value);
        setTerm({
          ...term,
          location: { text: value },
        });
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: "#864721",
          primary: "#864721",
        },
      })}
      options={locationOptions}
      className="basic-multi-select"
      classNames={{
        control: (state) => (state.isFocused ? "red" : "red"),
      }}
      classNamePrefix="select"
    />
  );
}
export default SelectLocation;
