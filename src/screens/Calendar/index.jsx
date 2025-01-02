import React, { useState } from "react";
import LayoutContainer from "../../Layout/LayoutContainer";
import FontText from "../../reuseable/FontText";
import {
  Pressable,
  ScrollView,
  View,
  useWindowDimensions,
  FlatList,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomCalendar from "./components/CustomCalendar";
import CalendarEventCard from "./components/CalendarEventCard";

export default function Calendar() {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [loaded, setLoaded] = useState(false);

  const [images, setimages] = useState([
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
  ]);

  return (
    <LayoutContainer>
      <View className="mb-[10] flex items-center py-[13]">
        <FontText className="mb-[8px] text-[18px] leading-[24px] font-chillaxMedium">
          Calendar
        </FontText>
        <CustomCalendar {...{ width }} />

        <View
          className="w-full"
          style={{
            height: 300,
          }}
        >
          <FontText className="mb-[15] font-chillaxMedium text-[20px] text-[#9A9898] leading-[24px]">
            Events
          </FontText>
          <FlatList
            vertical
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={images}
            renderItem={({ item, index }) => (
              <CalendarEventCard {...{ item, setLoaded }} />
            )}
          />
        </View>
      </View>
    </LayoutContainer>
  );
}
