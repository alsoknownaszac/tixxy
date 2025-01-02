import React, { useState } from "react";
import LayoutContainer from "../../Layout/LayoutContainer";
import {
  FlatList,
  Pressable,
  useWindowDimensions,
  View,
  StatusBar,
  Image,
} from "react-native";
import FontText from "../../reuseable/FontText";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BackArrow from "../../../assets/icons/back_arrow.svg";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";

import { useIsFocused } from "@react-navigation/native";
import ProfileTabCard from "./components/ProfileTabCard";

export default function Profile({ navigation }) {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  // const [loaded, setLoaded] = useState(false);

  const [profileTab, setProfileTab] = useState([
    {
      title: "Personal Info",
      icon: <Ionicons name="person" size={18} color="black" />,
      naviagtionName: "PersonalInfo",
      key: "1",
    },
    {
      title: "History",
      icon: <MaterialIcons name="content-paste" size={18} color="black" />,
      naviagtionName: "History",
      key: "2",
    },
    {
      title: "Settings",
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
      naviagtionName: "PlannerMode",
      key: "3",
    },
  ]);

  const isFocused = useIsFocused();

  const uri =
    "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg";

  return (
    <LayoutContainer noSafeAreaProfile>
      {isFocused && <StatusBar barStyle="light-content" />}
      <View
        style={{
          paddingTop: insets.top + 20,
          paddingLeft: insets.left + 20,
          paddingRight: insets.right + 20,
          minHeight: height * 0.4,
        }}
        className="mb-[10] flex-initial rounded-b-[20px] bg-[#7E62F0]"
      >
        <View className="py-[20px]">
          <Pressable onPress={() => navigation.goBack()}>
            <BackArrow width={26} height={26} strokeWidth={1} stroke="#fff" />
          </Pressable>
        </View>
        <View className="pt-[20px] pb-[30px]">
          <View className="flex gap-[16px] items-center">
            <Image
              source={{
                uri: uri,
              }}
              key={uri}
              style={{
                width: 80,
                height: 80,
                borderRadius: "100%",
                resizeMode: "cover",
              }}
              blurRadius={1.2}
              //   onLoad={() => setLoaded(true)}
            />
            <View className="flex items-center">
              <FontText className="font-trapRegular text-[24px] text-[#FFFFFF] leading-[32px]">
                Jane Doe
              </FontText>
              <FontText className="mt-[4px] font-trapRegular text-[16px] text-[#FFFFFF] leading-[20px]">
                janedoe1@gmail.com
              </FontText>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          width,
          paddingLeft: insets.left + 20,
          paddingRight: insets.right + 20,
          marginBottom: 20,
          flex: "1 1 auto",
          minHeight: height * 0.6,
        }}
      >
        <FlatList
          vertical
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={profileTab}
          renderItem={({ item, index }) => <ProfileTabCard {...{ item }} />}
        />
      </View>
    </LayoutContainer>
  );
}
