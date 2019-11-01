import React, { useState } from "react";
import { TextInput, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { setUserData } from "../redux/user/actions";

const Input = props => {
  const { setUserData } = props;

  const [localUser, setLocalUserData] = useState("");

  const submit = () => {
    setUserData({ firstName: localUser });
  };

  return (
    <>
      <TextInput
        onChangeText={value => setLocalUserData(value)}
        style={styles.text}
      />
      <Button title="Submit" onPress={submit} />
    </>
  );
};

export default connect(
  null,
  { setUserData }
)(Input);

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    marginTop: 200,
    borderColor: "gray",
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10
  }
});
