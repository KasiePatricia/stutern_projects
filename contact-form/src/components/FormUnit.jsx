import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Grid";

const FormUnit = ({ formik }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <InputLabel htmlFor="firstName" required>
          First Name
        </InputLabel>
        <TextField
          autoComplete="given-name"
          name="firstName"
          fullWidth
          id="firstName"
          placeholder="First Name"
          size="small"
          className="input-box"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="error">{formik.errors.firstName}</div>
        ) : null}
      </Grid>

      <Grid item xs={12} sm={6}>
        <InputLabel htmlFor="lastName" required>
          Last Name
        </InputLabel>
        <TextField
          fullWidth
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          autoComplete="family-name"
          size="small"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="error">{formik.errors.lastName}</div>
        ) : null}
      </Grid>

      <Grid item xs={12}>
        <InputLabel htmlFor="email" required>
          Email address
        </InputLabel>

        <TextField
          required
          fullWidth
          id="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
          size="small"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </Grid>

      <Grid item xs={12}>
        <InputLabel htmlFor="subject">Subject</InputLabel>
        <TextField
          required
          fullWidth
          name="subject"
          placeholder="Enter the subject here..."
          type="text"
          id="subject"
          autoComplete="subject"
          size="small"
          {...formik.getFieldProps("subject")}
        />
        {formik.touched.subject && formik.errors.subject ? (
          <div className="error">{formik.errors.subject}</div>
        ) : null}
      </Grid>

      <Grid item xs={12}>
        <InputLabel htmlFor="message">Message</InputLabel>
        <TextField
          multiline
          required
          fullWidth
          rows={4}
          type="text"
          id="message"
          name="message"
          placeholder="Enter your message here..."
          {...formik.getFieldProps("message")}
        />
        {formik.touched.message && formik.errors.message ? (
          <div className="error">{formik.errors.message}</div>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default FormUnit;
