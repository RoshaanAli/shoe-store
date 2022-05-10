import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
const CardComp = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: { xs: "100%", sm: 300, md: 350 },
            height: { xs: 200, md: 350 },
          },
        }}
      >
        <Paper elevation={3}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              justifyContent:"center"
            }}
          >
            Brand name
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default CardComp;
