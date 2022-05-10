import React, { Suspense, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/actions";
import NavBarComp from "../components/NavBarComp";
import CardComp from "../components/CardComp";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const HomeScreen = ({ getAllShoes, shoesRed }) => {
  useEffect(() => {
    console.log("HOME", shoesRed);
    getAllShoes();
  }, []);

  return (
    <>
      <NavBarComp />
      <Container fixed>
        <Grid container spacing={2}>
          <Suspense fallback={<h1>LOADING</h1>}>
            {shoesRed.results?.map((item, i) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <CardComp data={item} />
                </Grid>
              );
            })}
          </Suspense>
        </Grid>
      </Container>
    </>
  );
};

const mapStateToProps = ({ shoesRed }) => {
  return { shoesRed };
};

export default connect(mapStateToProps, actions)(HomeScreen);
