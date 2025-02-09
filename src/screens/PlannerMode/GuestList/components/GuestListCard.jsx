import React from "react";
import { Pressable, View } from "react-native";
import FontText from "../../../../reuseable/FontText";

export default function GuestListCard({ navigation, item }) {
  return (
    <Pressable onPress={() => {}}>
      <View className="bg-[#F3F2F2] mt-[16px] rounded-[20px] p-6 flex flex-row items-center justify-center">
        <View className="flex flex-row items-center gap-2">
          {/* {item.icon} */}
          <FontText className="font-trapMedium text-[16px] text-[#2A2B2A] leading-[20px]">
            {item.title}
          </FontText>
        </View>
      </View>
    </Pressable>
  );
}
