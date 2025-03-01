import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Pressable,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import FontText from "../../../reuseable/FontText";
import BackArrow from "../../../assets/icons/back_arrow.svg";
import SadFace from "../../../assets/icons/sad_face.svg";
import MoreBtn from "../../../assets/icons/more_icon.svg";
import PaymentListCard from "./components/PaymentListCard";

export default function PaymentEmptyScreens({ navigation }) {
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
              Payment
            </FontText>
          </View>
          <View className="w-1/6"></View>
        </View>
      </View>
      <View className="pt-[20px] pb-[30px]">
        <View className="flex">
          <SadFace width={91} height={96} strokeWidth={1} stroke="#374449" />
          <FontText className="font-chillaxMedium text-center text-[16px] leading-[24px] text-[#2A2B2A]">
            You have no payment method, create new one
          </FontText>
          <TouchableOpacity
            onPress={() => {}}
            className="py-[12] bg-[#7E62F0] w-full rounded-[100px] mt-[10] mb-[27] "
          >
            <FontText className="text-white text-center text-[18px] font-chillaxMedium leading-[150%]">
              Create
            </FontText>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
