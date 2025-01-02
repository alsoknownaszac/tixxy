import React, { useState } from "react";
import { TextInput, View, Image, TouchableOpacity } from "react-native";
import { SvgLeft, SvgRight } from "../reuseable/SignUpSvg";
import FontText from "../reuseable/FontText";
import LayoutContainer from "../Layout/LayoutContainer";

const facebookLogo = require("../../assets/logo/facebook_logo.png");
const googleLogo = require("../../assets/logo/google_logo.png");

export default function SignIn({ navigation }) {
  //   const [tab, setTabs] = useState(0);

  const HandleUserRegistration = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <LayoutContainer>
      <View className="py-[48]">
        <View className="mb-[10]">
          <FontText
            className="text-center font-chillaxMedium"
            style={{ fontSize: 35 }}
          >
            Welcome back!
          </FontText>
        </View>
        <View className="flex-row self-center">
          <FontText style={{ fontSize: 18 }}>Don't have an account? </FontText>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <FontText
              className="font-chillaxMedium"
              style={{ fontSize: 18, color: "#7E62F0" }}
            >
              Register
            </FontText>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View className="rounded-[25px] py-[14] px-[14] bg-[#DAD8D8]/40 border-2 border-[#DAD8D8] mb-[20]">
          <TextInput
            className="text-[16px]"
            editable
            numberOfLines={4}
            maxLength={40}
            onChangeText={(text) => onChangeText(text)}
            placeholder="Email Address"
            // value={value}
          />
        </View>
        <View className="rounded-[25px] py-[14] px-[14] bg-[#DAD8D8]/40 border-2 border-[#DAD8D8] mb-[10] ">
          <TextInput
            className="text-[16px]"
            editable
            numberOfLines={4}
            maxLength={40}
            onChangeText={(text) => onChangeText(text)}
            placeholder="Password"
            // value={value}
          />
        </View>
        <View className="mb-[50]">
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <FontText
              className="font-chillaxRegular"
              style={{ fontSize: 18, color: "#7E62F0" }}
            >
              Forgot Password?
            </FontText>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={HandleUserRegistration}
        className="py-[12] bg-[#7E62F0] w-full rounded-[100px] mt-[10] mb-[27] "
      >
        <FontText className="text-white text-center text-[18px] font-chillaxMedium leading-[150%]">
          Sign In
        </FontText>
      </TouchableOpacity>
      <View className="flex-row justify-between items-center mb-[20]">
        <SvgLeft />
        <FontText className="text-[16px]">or Sign In with</FontText>
        <SvgRight />
      </View>
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
      {/* <Button
        title="Go back to Home screen"
        onPress={() => navigation.popToTop()}
      /> */}
    </LayoutContainer>
  );
}
