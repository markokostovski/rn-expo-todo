import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import Child from "./src/Components/Child";

export default () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text>You clicked {count} times</Text>
      </View>
      <Child count={count} setCount={setCount} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1
  },
  text: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});
