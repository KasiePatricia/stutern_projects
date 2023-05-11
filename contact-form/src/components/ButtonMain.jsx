import React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const ButtonMain = ({ isLoading }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <Button variant="contained" color="primary" type="submit">
        {isLoading ? (
          <>
            <CircularProgress
              size={24}
              color="inherit"
              style={{ marginRight: "10px" }}
            />
            Submitting...
          </>
        ) : (
          "Submit"
        )}
      </Button>
    </div>
  );
};

export default ButtonMain;
