import { useState } from "react";
import auth from "@react-native-firebase/auth";

export function anonymousAuth() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  auth()
    .signInAnonymously()
    .then(() => {
      setIsSuccess(true);
      if (loading) setLoading(false);
      console.log("User signed in anonymously");
    })
    .catch((error) => {
      if (error.code === "auth/operation-not-allowed") {
        setIsError(true);
        setErrorMessage("Enable anonymous in your firebase console.");
        if (loading) setLoading(false);
      }
      setIsError(true);
      setErrorMessage(error);
      console.error(error);
    });

  if (loading) return null;

  return [loading, isSuccess, isError, errorMessage];
}
