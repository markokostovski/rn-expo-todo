import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default () => {
  const [count, setCount] = useState(0);

  return (
    <View
      style={{ flex: 1, justifyContent: "space-around", alignItems: "center" }}
    >
      <Text>You clicked {count} times</Text>
      <Button onPress={() => setCount(count + 1)} title="Click me" />
    </View>
  );
};
