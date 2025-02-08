import React, { useState } from "react";
import { FlatList, Pressable, View } from "react-native";
import LayoutContainer from "../../../Layout/LayoutContainer";
import BackArrow from "../../../../assets/icons/back_arrow.svg";
import FontText from "../../../reuseable/FontText";

export default function GuestList({ navigation }) {
  const [guestTab, setGuestTab] = useState([
    {
      title: "Share link with Guest",
      icon: <Ionicons name="person" size={18} color="black" />,
      naviagtionName: "PersonalInfo",
      key: "1",
    },
    {
      title: "Register Guest",
      icon: <MaterialIcons name="content-paste" size={18} color="black" />,
      naviagtionName: "History",
      key: "2",
    },
    {
      title: "Import list",
      icon: <Feather name="settings" size={18} color="black" />,
      naviagtionName: "Settings",
      key: "3",
    },
    {
      title: "Planner Mode",
      icon: (
        <MaterialCommunityIcons
          name="calendar-multiple"
          size={18}
          color="black"
        />
      ),
      naviagtionName: "Profile",
      key: "3",
    },
  ]);

  // const isFocused = useIsFocused();

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
              Settings
            </FontText>
          </View>
          <View className="w-1/6" />
        </View>
      </View>

      <View className="flex-1">
        <FlatList
          vertical
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={settingsTab}
          renderItem={({ item, index }) => <SettingsCard {...{ item }} />}
        />
      </View>
    </LayoutContainer>
  );
}
