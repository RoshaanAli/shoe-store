import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/actions";
import NavBarComp from '../components/NavBarComp'
import CardComp from "../components/CardComp";

const HomeScreen = ({ getAllShoes }) => {
  useEffect(() => {
    getAllShoes();
  }, []);

  return (
    <>
      <NavBarComp /> HomeScreen
      <CardComp />
    </>
  );
};

export default connect(null, actions)(HomeScreen);
