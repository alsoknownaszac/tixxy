import React from "react";
import { Image, View } from "react-native";
import FontText from "../../../reuseable/FontText";

export default function CalendarEventCard({ item, setLoaded }) {
  return (
    <View className="mb-[16px] bg-[#F2F2F2] rounded-2xl p-[16px] flex flex-row items-center">
      <View>
        <FontText className="font-trapRegular text-[17px] leading-[20px]">
          01
        </FontText>
        <FontText className="mt-[3] font-chillaxRegular text-[14px] text-[#9A9898] leading-[16px]">
          Tue
        </FontText>
      </View>
      <View className="flex flex-row gap-[16px] ml-[10px] items-center">
        <Image
          source={{
            uri: item.uri,
          }}
          key={item.uri}
          style={{
            width: 32,
            height: 32,
            borderRadius: "100%",
            resizeMode: "cover",
          }}
          blurRadius={1.2}
          onLoad={() => setLoaded(true)}
        />
        <View>
          <FontText className="font-chillaxRegular text-[14px] text-[#2A2B2A] leading-[20px]">
            New Town Gallery Opening
          </FontText>
          <FontText className="mt-[3] font-chillaxRegular text-[10px] text-[#7E62F0] leading-[12px]">
            Today
          </FontText>
        </View>
      </View>
    </View>
  );
}
