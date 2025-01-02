import React, { useState } from "react";
import { FlatList, Pressable, View } from "react-native";
import LayoutContainer from "../../../Layout/LayoutContainer";
import BackArrow from "../../../../assets/icons/back_arrow.svg";
import FontText from "../../../reuseable/FontText";
import SettingsCard from "./components/SettingsCard";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Settings({ navigation }) {
  const [settingsTab, setSettingsTab] = useState([
    {
      title: "Language",
      icon: <Ionicons name="person" size={18} color="black" />,
      naviagtionName: "Language",
      moreText: "English",
      key: "1",
    },
    {
      title: "Notifications",
      icon: <MaterialCommunityIcons name="bell" size={18} color="black" />,
      naviagtionName: "Notifications",
      key: "2",
    },
    {
      title: "Help",
      icon: (
        <MaterialCommunityIcons
          name="ticket-confirmation"
          size={18}
          color="black"
        />
      ),
      naviagtionName: "Help",
      key: "3",
    },
  ]);

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
