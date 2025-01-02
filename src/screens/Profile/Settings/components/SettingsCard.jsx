import React from "react";
import { Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Entypo from "@expo/vector-icons/Entypo";
import FontText from "../../../../reuseable/FontText";

export default function SettingsCard({ item }) {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate(item.naviagtionName)}>
      <View className="bg-[#F3F2F2] mt-[16px] rounded-2xl p-6 flex flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-2">
          {item.icon}
          <FontText className="font-trapRegular text-[16px] text-[#2A2B2A] leading-[20px]">
            {item.title}
          </FontText>
        </View>
        <View className="flex flex-row items-center gap-2">
          {item.moreText && (
            <FontText className="font-chillaxRegular text-[14px] leading-[18px] text-[#9A9898]">
              {item.moreText}
            </FontText>
          )}
          <Entypo name="chevron-right" size={14} color="black" />
        </View>
      </View>
    </Pressable>
  );
}
