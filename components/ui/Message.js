import { Typography } from "@mui/material";
import React from "react";
const Message = () => {
  return (
    <Typography
      variant="h6"
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "20px",
        padding: "10px",
        border: "2px solid green",
      }}
    >
      Form Submit SuccessFully
    </Typography>
  );
};

export default Message;
