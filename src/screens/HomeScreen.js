import React, { Suspense, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/actions";
import NavBarComp from "../components/NavBarComp";
import CardComp from "../components/CardComp";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const HomeScreen = ({ getAllShoes }) => {

  useEffect(() => {
    getAllShoes();
  }, []);

  return (
    <>
      <NavBarComp />
      <Container fixed>
        <Grid container spacing={2}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <CardComp />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
};

export default connect(null, actions)(HomeScreen);
