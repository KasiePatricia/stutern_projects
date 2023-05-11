import React from "react";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ButtonMain from "../components/ButtonMain";
import Box from "@mui/material/Box";
import Header from "../components/Header";
import FormUnit from "../components/FormUnit";
import { useFormik } from "formik";
import { useState } from "react";
import { submitFormData } from "../services/api";

const theme = createTheme();

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.subject) {
    errors.subject = "Required";
  } else if (values.subject.length > 20) {
    errors.subject = "Must be 20 characters or less";
  }

  if (!values.message) {
    errors.message = "Required";
  } else if (values.message.length > 200) {
    errors.message = "Must be 200 characters or less";
  }

  return errors;
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormError, setIsFormError] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState("");

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      try {
        // Try to submit the form data
        // alert(JSON.stringify(values, null, 2));
        await submitFormData(values);
        // If successful, reset the form and show the success message
        resetForm();
        setIsFormSubmitted(true);
        // Set a timer to hide the message after 3 seconds
        setTimeout(() => {
          setIsFormSubmitted(false);
        }, 3000);
      } catch (error) {
        // If there is an error, set the error state and message
        console.log(error);
        setIsFormError(true);
        setFormErrorMessage(error.message);
      } finally {
        // Set the loading status to false
        setIsLoading(false);
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            padding: "1.5rem",
            borderRadius: "0.5rem",
          }}
          noValidate
          autoComplete="off"
        >
          {isFormSubmitted && (
            <div
              style={{
                backgroundColor: "green",
                color: "white",
                padding: 10,
              }}
            >
              Thank you for your submission!
            </div>
          )}

          {isFormError && (
            <div
              style={{ backgroundColor: "red", color: "white", padding: 10 }}
            >
              {formErrorMessage}
            </div>
          )}
          <Header />
          <Box
            component="form"
            noValidate
            onSubmit={formik.handleSubmit}
            sx={{ mt: 3 }}
          >
            <FormUnit formik={formik} />
            <ButtonMain isLoading={isLoading} />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Contact;
