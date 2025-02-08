import React from "react";
import { Pressable, View } from "react-native";

export default function GuestListCard({ navigation }) {
  return (
    <Pressable onPress={() => {}}>
      <View className="bg-[#F3F2F2] mt-[16px] rounded-2xl p-6 flex flex-row items-center justify-between">
        {/* <View className="flex flex-row items-center gap-2">
          {item.icon}
          <FontText className="font-trapRegular text-[16px] text-[#2A2B2A] leading-[20px]">
            {item.title}
          </FontText>
        </View> */}
      </View>
    </Pressable>
  );
}
