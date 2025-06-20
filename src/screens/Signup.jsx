import React, { useState } from "react";
import { SignUpScreen } from "../features/authentication";

export default function Signup({ navigation }) {
  const [tab, setTabs] = useState(0);

  return <SignUpScreen {...{ navigation, tab, setTabs }} />;
}
