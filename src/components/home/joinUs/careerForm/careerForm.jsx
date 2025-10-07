import { useRef, useState } from "react";
import * as Yup from "yup";

import { useFormik } from "formik";
import React, { useContext } from "react";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { careerModalContext } from "../../../../context/careerContext";
const FILE_SIZE = 5 * 1024 * 1024; // 5MB
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "application/pdf",
];
function CareerForm() {
  const [isLoading, setIsLoading] = useState(false);
  const inputFile = useRef(null);
  const { setOpen } = useContext(careerModalContext);
  const validationSchema = Yup.object({
    firstName: Yup.string().min(2).max(20).required("first name is required"),
    lastName: Yup.string().min(2).max(20).required("last name is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must be numeric")
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number can't be longer than 15 digits")
      .required("Phone number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
    cv: Yup.mixed()
      .required("A CV is required")
      .test(
        "fileSize",
        "File is too large. Maximum size is 5MB.",
        (value) => !value || (value && value.size <= FILE_SIZE)
      )
      .test(
        "fileFormat",
        "Unsupported format. Please upload PDF, JPG, or PNG files.",
        (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
      ),
  });

  // Formik form handling
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
      cv: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      const formdata = new FormData();
      const { firstName, lastName, phone, email, message, cv } = values;

      function SelectIndustry() {
        const { term, setTerm, industryOptions } = useContext(projectContext);

        return (
          <Select
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? "#C5A363" : "gray", // Border color on focus
                boxShadow: state.isFocused
                  ? "0 25px 50px -12px rgba(134, 71, 33, 0.25), 0 10px 20px -6px rgba(134, 71, 33, 0.15)" // Stronger shadow
                  : "none",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease", // Slightly longer transition
              }),
              option: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: state.isFocused ? "#C5A363" : "white",
                color: state.isFocused ? "white" : "black",
                cursor: "pointer",
              }),
              multiValue: (baseStyles) => ({
                ...baseStyles,
                backgroundColor: "#C5A363", // Background for selected options
              }),
              multiValueLabel: (baseStyles) => ({
                ...baseStyles,
                color: "white", // Text color of selected options
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
            placeholder="Select Industry"
            onChange={(data) => {
              const value = data.map((d) => d.value);
              setTerm({
                ...term,
                industry: { text: value },
              });
            }}
            noOptionsMessage={"No options available"}
            options={industryOptions}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "#C5A363",
                primary: "#C5A363",
              },
            })}
            className="basic-multi-select rounded-xl"
            classNamePrefix="select"
          />
        );
      }

      formdata.append("firstName", firstName);
      formdata.append("lastName", lastName);
      formdata.append("phone", phone);
      formdata.append("email", email);
      formdata.append("message", message);
      formdata.append("cv", cv);
      formdata.append("websiteName", "ARUP");

      const { data } = await axios.post(
        "https://wolsey.ca/api/candidate",
        formdata
      );
      toast.success("Application Sent Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setIsLoading(false);
      setOpen(false);
    },
  });

  return (
    <>
      <ToastContainer />
      <form onSubmit={formik.handleSubmit} className="mb-5  !w-full">
        <div className="grid gap-6 mb-3 md:grid-cols-2">
          {/* Name input */}
          <div>
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              className="bg-gray !text-mainColor  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-mainGold focus:ring-mainGold focus:outline-none placeholder-mainColor"
              placeholder="First Name"
              required
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-red-800  mb-0">{formik.errors.firstName}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              className="bg-gray !text-mainColor  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-mainGold focus:ring-mainGold focus:outline-none placeholder-mainColor"
              placeholder="Last Name"
              required
            />
          </div>
        </div>

        {/* phone input */}
        <div className="mb-3">
          <input
            type="phone"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            className="bg-gray !text-mainColor  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-mainGold focus:ring-mainGold focus:outline-none placeholder-mainColor"
            placeholder="Phone Number"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="bg-gray !text-mainColor  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-mainGold focus:ring-mainGold focus:outline-none placeholder-mainColor"
            placeholder="Email"
            required
          />
        </div>

        {/* Industry dropdown */}
        {/* <div className="mb-3">
          <select
            id="position"
            name="position"
            onChange={formik.handleChange}
            value={formik.values.position}
            className="bg-gray !text-gray-700  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 !dark:text-gray-700 focus:border-mainGold focus:ring-mainGold focus:outline-none placeholder-mainColor"
            required
          >
            <option
              className="text-gray-700"
              value=""
              label="Vacancies Available"
            />
            <option
              className="!hover:bg-mainGold"
              value="Legal Consultant"
              label="Legal Consultant"
            />
            <option value="V.P Operations" label="V.P Operations" />
            <option value="HR Generalist" label="HR Generalist" />
            <option value="IT Manager" label="IT Manager" />
            <option value="IT Administration" label="IT Administration" />
            <option value="Financial consultant" label="Financial consultant" />
            <option
              value="Accountantant Manager"
              label="Accountantant Manager"
            />
            <option value="Engineering Manager" label="Engineering Manager" />
            <option value="Head Of Structural" label="Head Of Structural" />
            <option value="Sr. Structural Eng." label="Sr. Structural Eng." />
            <option
              value="Intermediate Structural Eng."
              label="Intermediate Structural Eng."
            />
            <option
              value="Junior Structural Eng."
              label="Junior Structural Eng."
            />
            <option
              value="Structural Intern Eng."
              label="Structural Intern Eng."
            />
            <option
              value="Energy Technical Lead"
              label="Energy Technical Lead"
            />
            <option value="Electrical Eng." label="Electrical Eng." />
            <option
              value="Head Of Architectural"
              label="Head Of Architectural"
            />
            <option value="BIM Team Leader" label="BIM Team Leader" />
            <option
              value="Sr. BIM Architectural Eng."
              label="Sr. BIM Architectural Eng."
            />
            <option
              value="Junior BIM Architectural Eng."
              label="Junior BIM Architectural Eng."
            />
            <option
              value="Architectural Intern Eng."
              label="Architectural Intern Eng."
            />

            <option
              value="Head of Project Control"
              label="Head of Project Control"
            />
            <option value="Project Control Eng." label="Project Control Eng." />

            <option value="Account Manager" label="Account Manager" />
            <option value="Content Creator" label="Content Creator" />
            <option value="Graphic Designer" label="Graphic Designer" />
            <option
              value="Web Design & Developer"
              label="Web Design & Developer"
            />

            <option value="Office Manager" label="Office Manager" />
            <option value="Runner" label="Runner" />
            <option value="Office Boy" label="Office Boy" />
          </select>
        </div> */}

        {/* Message input */}
        <div className="mb-3">
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            className="bg-gray !text-mainColor  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-mainColor focus:border-mainGold focus:ring-mainGold focus:outline-none placeholder-mainColor"
            placeholder="Message"
            rows={6}
            required
          />
        </div>

        {/* File input */}
        <div className=" relative">
          <button
            onClick={() => inputFile.current.click()}
            className="absolute bg-white  text-mainColor border-white px-3  h-full"
          >
            Attach CV
          </button>
          <input
            className="block w-full  text-mainColor cursor-pointer  bg-gray dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="file_input_help"
            id="file_input"
            name="cv"
            ref={inputFile}
            type="file"
            onChange={(event) => {
              formik.setFieldValue("cv", event.currentTarget.files[0]);
            }}
          />
        </div>

        <p className="mt-1  text-white dark:text-gray-300" id="file_input_help">
          PDF (Max size: 5MB).
        </p>
        {isLoading ? (
          <button
            type="submit"
            className="text-white mx-auto flex bg-mainGold  focus:ring-4 focus:outline-none focus:ring-white font-medium  w-full sm:w-auto px-8 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 rounded-2xl dark:focus:ring-blue-800"
          >
            Loading
          </button>
        ) : (
          <button
            type="submit"
            className="text-white mx-auto flex bg-mainGold   focus:ring-4 focus:outline-none focus:ring-white font-medium  w-full sm:w-auto px-8 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 rounded-2xl dark:focus:ring-blue-800"
          >
            Submit
          </button>
        )}
      </form>
    </>
  );
}

export default CareerForm;
