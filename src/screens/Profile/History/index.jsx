import React, { useState } from "react";
import { FlatList, Pressable, useWindowDimensions, View } from "react-native";
import LayoutContainer from "../../../Layout/LayoutContainer";
import BackArrow from "../../../../assets/icons/back_arrow.svg";
import FontText from "../../../reuseable/FontText";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HistoryEventCard from "./components/HistoryEventCard";

const Tab = createMaterialTopTabNavigator();

export default function History({ navigation }) {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  return (
    <LayoutContainer noSafeAreaProfile>
      <View
        style={{
          paddingTop: insets.top + 20,
          paddingLeft: insets.left + 20,
          paddingRight: insets.right + 20,
        }}
        className="mb-[22] flex-initial rounded-b-[20px]"
      >
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
              History
            </FontText>
          </View>
          <View className="w-1/6" />
        </View>
      </View>

      <View className="flex-1">
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {
              fontFamily: "Chillax-Medium",
              fontSize: 16,
              lineHeight: 23.5,
              textTransform: "capitalize",
            },
            tabBarIndicatorStyle: { backgroundColor: "#7E62F0" },
          }}
          sceneContainerStyle={{
            backgroundColor: "transparent",
            paddingTop: 24,
            paddingLeft: insets.left + 20,
            paddingRight: insets.right + 20,
          }}
        >
          <Tab.Screen name="Host" component={HostTab} />
          <Tab.Screen name="Guest" component={GuestTab} />
        </Tab.Navigator>
      </View>
    </LayoutContainer>
  );
}

function HostTab() {
  const [tabData, setTabData] = useState([
    {
      label: "January 2023",
      data: [
        {
          uri: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg",
          key: "1",
        },
        {
          uri: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg",
          key: "2",
        },
        {
          uri: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg",
          key: "3",
        },
      ],
    },
  ]);

  return (
    <View className="flex-1">
      <FlatList
        vertical
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={tabData}
        renderItem={({ item, index }) => <HistoryCard {...{ item }} />}
      />
    </View>
  );
}

function GuestTab() {
  const [tabData, setTabData] = useState([
    {
      label: "January 2023",
      data: [
        {
          uri: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg",
          key: "1",
        },
        {
          uri: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg",
          key: "2",
        },
        {
          uri: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg",
          key: "3",
        },
      ],
    },
  ]);

  return (
    <View className="flex-1">
      <FlatList
        vertical
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={tabData}
        renderItem={({ item, index }) => <HistoryCard {...{ item }} />}
      />
    </View>
  );
}

function HistoryCard({ item }) {
  const { label, data } = item;

  const [loaded, setLoaded] = useState(false);

  return (
    <View>
      <FontText className="font-chillaxMedium text-[16px] leading-[24px] mb-2 text-[#9A9898]">
        {label}
      </FontText>
      {data.map((val) => (
        <HistoryEventCard {...{ val, setLoaded }} />
      ))}
    </View>
  );
}
