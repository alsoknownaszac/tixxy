import React, { useState } from "react";
import { Pressable, View, TouchableOpacity } from "react-native";
import FontText from "../../../../reuseable/FontText";
import { useNavigation } from "@react-navigation/native";

export default function GuestListSection({ item, index }) {
  const navigation = useNavigation();

  const [openList, setOpenList] = useState(false);
  const [activeKey] = useState(item.key - 1);

  return (
    <Pressable
      onPress={() => {
        activeKey == index && setOpenList(!openList);
      }}
    >
      <View className="border-2 border-[#F3F2F2] mt-[16px] rounded-[20px]">
        <View className="p-[20px] flex flex-row items-center justify-center">
          <View className="flex flex-row items-center gap-2">
            {item.icon}
            <FontText className="font-trapMedium text-[16px] text-[#2A2B2A] leading-[20px]">
              {item.title}
            </FontText>
          </View>
        </View>
        {openList && activeKey == index && (
          <View className="h-[1.5px] bg-[#DAD8D8] w-4/5 mx-auto" />
        )}

        {openList && activeKey == index && (
          <View className="p-[20px] px-[12px]">
            <FontText className="font-chillaxRegular text-[14px] text-[#595959] leading-[20px]">
              {item.info}
            </FontText>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(item.btn_link);
              }}
              className="py-[12] bg-[#7E62F0] w-1/2 mx-auto rounded-[100px] mt-[16]"
            >
              <FontText className="text-white text-center text-[18px] font-chillaxMedium leading-[150%]">
                {item.btn_name}
              </FontText>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Pressable>
  );
}
