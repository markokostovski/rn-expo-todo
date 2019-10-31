import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { setUserData } from "../redux/user/actions.js";

const User = props => {
  const { user, setUserData } = props;

  // setTimeout(() => {
  //   setUserData({ lastName: "Min" });
  // }, 4000);

  return <Text style={styles.text}>{user.lastName}</Text>;
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { setUserData }
)(User);

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    marginTop: 200
  }
});
