import React from "react";
import { Image, View } from "react-native";
import FontText from "./FontText";
import CalendarIconII from "../../assets/icons/calendar_icon_2.svg";
import Location from "../../assets/icons/location.svg";
import Clock from "../../assets/icons/clock.svg";

export default function TicketDetailsCard({
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
          height: 153,
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
          height: 153,
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
          resizeMode: "center",
        }}
        blurRadius={1.2}
        onLoad={() => setLoaded(true)}
      />
      <View
        className="px-[18] pt-[15] pb-[10] flex absolute justify-end "
        style={{
          height: 153,
          width: imageWidth,
        }}
      >
        <View className="px-[12] py-[6] w-full rounded-md bg-[#808080]/80 flex flex-row justify-between items-center">
          <View>
            <FontText className="text-white font-satoshiMedium text-[18px] leading-[20px]">
              Museum Tour
            </FontText>
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
