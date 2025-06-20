import React, { useState } from "react";
import { TextInput, View, Image, TouchableOpacity } from "react-native";
import { SvgLeft, SvgRight } from "./components/SignUpSvg";
import FontText from "../../../reuseable/FontText";
import LayoutContainer from "../../../Layout/LayoutContainer";
import * as SplashScreen from "expo-splash-screen";
import { emailpasswordAuth } from "../services/emailpasswordAuth";

const facebookLogo = require("../assets/facebook_logo.png");
const googleLogo = require("../assets/google_logo.png");

export default function SignUpScreen({ navigation, tab, setTabs }) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};
    if (tab === 0) {
      if (!fullname.trim()) newErrors.fullname = "Fullname is required.";
      if (!email.trim()) {
        newErrors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = "Invalid email format.";
      }
    }
    if (tab === 1) {
      if (!password.trim()) newErrors.password = "Password is required.";
      if (!confirmPassword.trim()) {
        newErrors.confirmPassword = "Confirm Password is required.";
      } else if (password !== confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match.";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    switch (field) {
      case "fullname":
        setFullname(value);
        break;
      case "email":
        setEmail(value.toLowerCase());
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const handleRegistration = () => {
    if (tab === 0) {
      setTabs(1);
    }
    if (tab === 1 && validateInputs()) {
      console.log("Registration data:", {
        fullname,
        email,
        password,
      });
      [loading, isSuccess, isError, errorMessage] = emailpasswordAuth(
        email,
        password
      );
      if (loading) return; // Handle loading state if necessary
      if (isError) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: errorMessage || "An error occurred during registration.",
        }));
        return;
      }
      if (isSuccess) {
        // Handle successful registration
        console.log("Registration successful!");
        setFullname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setErrors({});
        navigation.navigate("SignIn");
      }
    }
  };

  return (
    <LayoutContainer>
      <View className="py-[48]">
        <View className="mb-[10]">
          <FontText
            className="text-center font-chillaxMedium"
            style={{ fontSize: 35 }}
          >
            Sign Up
          </FontText>
        </View>
        <View className="flex-row self-center">
          <FontText style={{ fontSize: 18 }}>
            Already have an account?{" "}
          </FontText>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <FontText
              className="font-chillaxMedium"
              style={{ fontSize: 18, color: "#7E62F0" }}
            >
              Sign In
            </FontText>
          </TouchableOpacity>
        </View>
      </View>
      {tab === 0 && (
        <View>
          <View className="rounded-[25px] py-[14] px-[14] bg-[#DAD8D8]/20 border-2 border-[#DAD8D8] mb-[20]">
            <TextInput
              className="text-[16px]"
              editable
              numberOfLines={4}
              maxLength={40}
              onChangeText={(text) => handleInputChange("fullname", text)}
              placeholder="Fullname"
              value={fullname}
            />
            {errors.fullname && (
              <FontText style={{ color: "red", fontSize: 14 }}>
                {errors.fullname}
              </FontText>
            )}
          </View>
          <View className="rounded-[25px] py-[14] px-[14] bg-[#DAD8D8]/20 border-2 border-[#DAD8D8] mb-[100]">
            <TextInput
              className="text-[16px]"
              editable
              numberOfLines={4}
              maxLength={40}
              onChangeText={(text) => handleInputChange("email", text)}
              placeholder="Email Address"
              value={email}
              autoCapitalize="none"
            />
            {errors.email && (
              <FontText style={{ color: "red", fontSize: 14 }}>
                {errors.email}
              </FontText>
            )}
          </View>
        </View>
      )}

      {tab === 1 && (
        <View>
          <View className="rounded-[25px] py-[14] px-[14] bg-[#DAD8D8]/40 border-2 border-[#DAD8D8] mb-[20]">
            <TextInput
              className="text-[16px]"
              editable
              numberOfLines={4}
              maxLength={40}
              onChangeText={(text) => handleInputChange("password", text)}
              placeholder="Password"
              value={password}
              secureTextEntry
            />
            {errors.password && (
              <FontText style={{ color: "red", fontSize: 14 }}>
                {errors.password}
              </FontText>
            )}
          </View>
          <View className="rounded-[25px] py-[14] px-[14] bg-[#DAD8D8]/40 border-2 border-[#DAD8D8] mb-[100]">
            <TextInput
              className="text-[16px]"
              editable
              numberOfLines={4}
              maxLength={40}
              onChangeText={(text) =>
                handleInputChange("confirmPassword", text)
              }
              placeholder="Confirm Password"
              value={confirmPassword}
              secureTextEntry
            />
            {errors.confirmPassword && (
              <FontText style={{ color: "red", fontSize: 14 }}>
                {errors.confirmPassword}
              </FontText>
            )}
          </View>
        </View>
      )}

      <TouchableOpacity
        onPress={handleRegistration}
        className="py-[12] bg-[#7E62F0] w-full rounded-[100px] mt-[10] mb-[27] "
      >
        <FontText className="text-white text-center text-[18px] font-chillaxMedium leading-[150%]">
          {tab === 0 ? "Continue" : "Complete Sign Up"}
        </FontText>
      </TouchableOpacity>
      {tab === 0 && (
        <View className="flex-row justify-between items-center mb-[20]">
          <SvgLeft />
          <FontText className="text-[16px]">or Sign Up with</FontText>
          <SvgRight />
        </View>
      )}
      {tab === 0 && (
        <View className="flex-row justify-between items-center gap-[17]">
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            className="self-end border border-[#9A9898] rounded-full py-[12] px-[16] flex-1 "
          >
            <View className="flex-row justify-center items-center gap-[8]">
              <Image
                className="w-[25] h-[25]"
                source={googleLogo}
                resizeMode="cover"
                blurRadius={1}
              />
              <View className="">
                <FontText
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}
                  className="font-medium text-[20px]"
                >
                  Google
                </FontText>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            className="self-end border border-[#9A9898] rounded-full py-[12] px-[16] flex-1"
          >
            <View className="flex-row justify-center items-center gap-[8]">
              <Image
                className="w-[25] h-[25]"
                source={facebookLogo}
                resizeMode="cover"
                blurRadius={1}
              />
              <View className="">
                <FontText
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}
                  className="font-medium text-[20px]"
                >
                  Facebook
                </FontText>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </LayoutContainer>
  );
}
