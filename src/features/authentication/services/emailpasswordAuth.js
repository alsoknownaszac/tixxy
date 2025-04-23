import { useState } from "react";
import auth from "@react-native-firebase/auth";

export function emailpasswordAuth(email, password) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      setIsSuccess(true);
      if (loading) setLoading(false);
      console.log("User account created & signed in!");
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        setIsError(true);
        setErrorMessage("That email address is already in use!");
        if (loading) setLoading(false);
      }

      if (error.code === "auth/invalid-email") {
        setIsError(true);
        setErrorMessage("That email address is invalid!");
        if (loading) setLoading(false);
      }

      setIsError(true);
      setErrorMessage(error);
      console.error(error);
    });

  if (loading) return null;

  return [loading, isSuccess, isError, errorMessage];
}
