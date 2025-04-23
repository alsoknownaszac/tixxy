import React, { useState } from "react";
import { SignUpScreen } from "../features/authentication";

export default function Signup({ navigation }) {
  const [tab, setTabs] = useState(0);

  const HandleUserRegistration = () => {
    if (tab === 0) {
      setTabs(1);
    } else navigation.navigate("SignIn");
  };

  return (
    <SignUpScreen
      {...{ navigation, tab, onChangeText, HandleUserRegistration }}
    />
  );
}
