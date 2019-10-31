import React from "react";
import { Text, Button } from "react-native";

const AddCount = props => {
  const { setCount, count } = props;

  return <Button onPress={() => setCount(1 + count)} title="Click me" />;
};

export default AddCount;
