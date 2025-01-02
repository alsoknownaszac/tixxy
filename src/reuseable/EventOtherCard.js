import React from "react";
import { Image, View } from "react-native";
import FontText from "./FontText";
import Location from "../../assets/icons/location.svg";
import Clock from "../../assets/icons/clock.svg";

export default function EventOtherCard({ item, setLoaded }) {
  return (
    <View className="flex flex-row items-center mb-[16]">
      <View className="relative mr-4">
        <Image
          source={{
            uri: item.uri,
          }}
          key={item.uri}
          style={{
            width: 102,
            height: 90,
            borderRadius: 16,
            resizeMode: "cover",
          }}
          blurRadius={1.2}
          onLoad={() => setLoaded(true)}
        />
        <View
          className="px-[6] py-[10] rounded-[16px] flex absolute items-start "
          style={{
            width: 102,
            height: 90,
          }}
        >
          <View className="h-fit w-fit px-2 py-1 rounded-xl backdrop-blur-xl bg-black/60">
            <FontText className="text-white font-satoshiMedium text-[14] leading-[20] pl-1">
              Private
            </FontText>
          </View>
        </View>
      </View>
      <View className="">
        <FontText className="font-chillaxMedium text-[19px] leading-[20px] mb-2">
          Afronation concert
        </FontText>
        <View className="flex flex-row mb-2">
          <Clock width={16} height={16} strokeWidth={0.3} stroke="#000" />
          <FontText className="text-[16px] leading-[20px] ml-2">
            Sept. 21, 10:00 PM
          </FontText>
        </View>
        <View className="flex flex-row mb-2">
          <Location width={16} height={16} strokeWidth={0.3} stroke="#000" />
          <FontText className="text-[16px] leading-[20px] ml-2">
            Eko hotel, Lagos
          </FontText>
        </View>
      </View>
    </View>
  );
}
