import React from "react";
import { Text } from "react-native";

export default function FontText(props) {
  return (
    <Text className={`font-chillaxRegular ${props.className}`} {...props}>
      {props.children}
    </Text>
  );
}
