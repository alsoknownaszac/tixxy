import React from "react";
import { Image, View } from "react-native";
import FontText from "./FontText";
import CalendarIconII from "../../assets/icons/calendar_icon_2.svg";
import Location from "../../assets/icons/location.svg";
import Clock from "../../assets/icons/clock.svg";

export default function EventMainCard({
  item,
  setLoaded,
  imageWidth,
  containerStyle,
}) {
  return (
    <View
      className="relative"
      style={
        ({
          height: 200,
        },
        containerStyle)
      }
    >
      <Image
        source={{
          uri: item.uri,
        }}
        key={item.uri}
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
      <View
        className="px-[18] pt-[15] pb-[10] rounded-[16] flex absolute justify-between "
        style={{
          height: 200,
          width: imageWidth,
        }}
      >
        <View className="px-[9] py-[5] rounded-xl ml-auto backdrop-blur-xl bg-black/60 backdrop-brightness-150 flex flex-row justify-between">
          <CalendarIconII
            width={16}
            height={16}
            strokeWidth={0.3}
            stroke="#fff"
          />
          <FontText className="text-white font-satoshiMedium text-[16px] leading-[20px] pl-1">
            May 21
          </FontText>
        </View>
        <View className="px-[12] py-[6] w-full rounded-xl bg-[#808080]/80 flex flex-row justify-between items-center">
          <View>
            <FontText className="text-white font-satoshiMedium text-[18px] leading-[20px] mb-2">
              Museum Tour
            </FontText>
            <View className="flex flex-row">
              <Clock width={16} height={16} strokeWidth={0.3} stroke="#fff" />
              <FontText className="text-white text-[16px] leading-[20px] pl-1 pr-3">
                11:11 PM
              </FontText>
              <Location
                width={16}
                height={16}
                strokeWidth={0.3}
                stroke="#fff"
              />
              <FontText className="text-white text-[16px] leading-[20px] pl-1">
                Netherlands
              </FontText>
            </View>
          </View>
          <View className="h-fit px-3 py-1 rounded-xl backdrop-blur-xl bg-black/60">
            <FontText className="text-white font-satoshiMedium text-[14px] leading-[20px]">
              Private
            </FontText>
          </View>
        </View>
      </View>
    </View>
  );
}
