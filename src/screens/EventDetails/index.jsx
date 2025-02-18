import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Pressable,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
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
      <View className="pt-[20px] pb-[30px]">
        <View className="flex gap-[16px] items-center">
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
          <View className="flex items-center">
            <FontText className="font-trapRegular text-[24px] text-[#FFFFFF] leading-[32px]">
              Jane Doe
            </FontText>
            <FontText className="mt-[4px] font-trapRegular text-[16px] text-[#FFFFFF] leading-[20px]">
              janedoe1@gmail.com
            </FontText>
          </View>
        </View>
      </View>
      <View className="flex-1">
        <View className="">
          <FontText className="font-trapRegular text-[24px] text-[#FFFFFF] leading-[32px]">
            May 7, 2023 4:30PM
          </FontText>
        </View>
        <View className="">
          <FontText className="font-trapRegular text-[24px] text-[#FFFFFF] leading-[32px]">
            2030 Movement: NFTs & Blockchain - Hot Today, Not Tomorrow?
          </FontText>
        </View>
        <View className="">
          <FontText className="font-trapRegular text-[24px] text-[#FFFFFF] leading-[32px]">
            Mongolia
          </FontText>
        </View>
        <View className="">
          <FontText className="font-trapRegular text-[24px] text-[#FFFFFF] leading-[32px]">
            Description
          </FontText>
        </View>
        <View className="">
          <FontText className="font-trapRegular text-[24px] text-[#FFFFFF] leading-[32px]">
            Description
          </FontText>
        </View>
        <View className="">
          <FontText className="font-trapRegular text-[24px] text-[#FFFFFF] leading-[32px]">
            We are Fotizo show hauz an entertainment company in south South we
            put together outdoor event that feature Lifestyle and design to
            promote innovation and most Premium Excitement experience for young
            people across south south and Nigeria at large.
          </FontText>
        </View>
      </View>
      <View className="p-[16]">
        <TouchableOpacity
          onPress={() => {}}
          className="py-[12] bg-[#7E62F0] w-full rounded-[100px] mt-[10] mb-[27] "
        >
          <FontText className="text-white text-center text-[18px] font-chillaxMedium leading-[150%]">
            View List
          </FontText>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
