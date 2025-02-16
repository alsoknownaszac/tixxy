import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";

export default function EventDetails({ navigation }) {
  return (
    <View className="flex-1 bg-[#FCFCFC]">
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Home")}
      />
      <Text>Details.</Text>

      <Button
        title="Go back to Home screen"
        onPress={() => navigation.popToTop()}
      />
      <StatusBar style="auto" />
    </View>
  );
}
