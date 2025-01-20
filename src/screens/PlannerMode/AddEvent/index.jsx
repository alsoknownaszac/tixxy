import React from "react";
import { Pressable, View } from "react-native";
import FontText from "../../../reuseable/FontText";
import LayoutContainer from "../../../Layout/LayoutContainer";
import BackArrow from "../../../../assets/icons/back_arrow.svg";

export default function AddEvent({ navigation }) {
  return (
    <LayoutContainer>
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
              History
            </FontText>
          </View>
          <View className="w-1/6" />
        </View>
      </View>
      <View>
        <FontText className="mb-[15] ml-[20] font-satoshiBold text-[25px] leading-[28px]">
          Add Event
        </FontText>
      </View>
    </LayoutContainer>
  );
}
