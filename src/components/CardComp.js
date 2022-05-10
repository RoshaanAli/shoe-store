import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import cart from "../assets/images/cart.png";
import Divider from "@mui/material/Divider";

const P = (props) => {
  return (
    <Typography variant="p" noWrap component="p" m={1} sx={props.styleX}>
      {props.children}
    </Typography>
  );
};

const CardComp = ({data}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          position: "relative",
          "& > :not(style)": {
            m: 1,
            width: { xs: "100%", sm: 300, md: 350 },
            height: { xs: "auto", md: "auto" },
          },
        }}
      >
        <Paper elevation={3}>
          <Typography
            variant="h6"
            noWrap
            component="h6"
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              justifyContent: "center",
            }}
          >
            {data.brand}
          </Typography>
          <img src={data.media.thumbUrl} style={{ width: "100%", height: "auto" }} />
          <Divider light />
          <P
            variant="p"
            noWrap
            component="p"
            styleX={{ justifyContent: "center", display: "flex" }}
          >
            {data.title}
          </P>
          <P variant="p" noWrap component="p">
            Name : {data.name}
          </P>
          <P variant="p" noWrap component="p">
            Release Date : {data.releaseDate}
          </P>
          <P variant="p" noWrap component="p">
            Color : {data.colorway}
          </P>
          <P variant="p" noWrap component="p">
            Gender : {data.gender}
          </P>
        </Paper>
        <div
          style={{
            backgroundColor: "#f77f7f",
            width: "60px",
            height: "60px",
            position: "absolute",
            bottom: -20,
            right: -10,
            borderRadius: "50px",
            justifyContent:"center",
            alignItems:"center",
            display:"flex"
          }}
        ><h4>{`${data.retailPrice} $`}</h4></div>
      </Box>
    </>
  );
};

export default CardComp;
