import React from "react";
import { Button, StyleSheet } from "react-native";

export default props => {
  const { setCount, count } = props;
  return (
    <Button
      style={styles.button}
      onPress={() => setCount(count + 1)}
      title="Click me now :D"
    />
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 0,
    display: "none"
  }
});
