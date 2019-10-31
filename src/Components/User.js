import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { setUserData } from "../redux/user/actions.js";

const User = props => {
  const { user } = props;

  return <Text style={styles.text}>Hello {user.firstName}</Text>;
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(User);

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    marginTop: 200
  }
});
