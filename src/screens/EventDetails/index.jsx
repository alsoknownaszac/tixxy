import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Pressable, Text, View, Image } from "react-native";
import FontText from "../../reuseable/FontText";
import BackArrow from "../../../assets/icons/back_arrow.svg";
import MoreBtn from "../../../assets/icons/more_icon.svg";

export default function EventDetails({ navigation }) {
  return (
    <View className="flex-1 bg-[#FCFCFC]">
      <View className="mb-[22] flex-initial rounded-b-[20px]">
        <View className="py-[20px] flex flex-row justify-between items-center ">
          <View className="w-1/6">
            <Pressable onPress={() => navigation.goBack()}>
              <BackArrow
                width={26}
                height={26}
                strokeWidth={1}
                stroke="#9A9898"
              />
            </Pressable>
          </View>
          <View className="w-2/6">
            <FontText className="font-chillaxMedium text-center text-[16px] leading-[24px] text-[#2A2B2A]">
              Event Details
            </FontText>
          </View>
          <View className="w-1/6">
            <Pressable className="ml-auto" onPress={() => {}}>
              <MoreBtn
                width={26}
                height={26}
                strokeWidth={1}
                stroke="#9A9898"
              />
            </Pressable>
          </View>
        </View>
      </View>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg",
        }}
        style={{
          position: "relative",
          width: imageWidth,
          height: 200,
          borderRadius: 16,
          resizeMode: "center",
        }}
        blurRadius={1.2}
        onLoad={() => setLoaded(true)}
      />
      <StatusBar style="auto" />
    </View>
  );
}
