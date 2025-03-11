import React, { useRef, useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  Dimensions,
  useWindowDimensions,
  FlatList,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import FontText from "../../reuseable/FontText";
import LayoutContainer from "../../Layout/LayoutContainer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// import CalendarIconII from "../../../assets/icons/calendar_icon_2.svg";
// import Location from "../../../assets/icons/location.svg";
// import Clock from "../../../assets/icons/clock.svg";
import EventMainCard from "../../reuseable/EventMainCard";
import EventOtherCard from "../../reuseable/EventOtherCard";

import { useGlobalReducer, useGlobalState } from "../../lib/appContext";
import TicketDetailsModal from "../components/EventDetails/TicketDetailsModal";

// const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Dashboard({ navigation }) {
  const { event } = useGlobalState();
  const dispatch = useGlobalReducer();

  const [paidEvent, setPaidEvent] = useState(true);

  const { width, height } = useWindowDimensions();
  const imageWidth = width - 40;
  const insets = useSafeAreaInsets();

  const [loaded, setLoaded] = useState(false);

  const ticketDetailsData = {
    width: imageWidth,
    setLoaded,
    image_uri:
      "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg",
    date: "2024-06-10T00:00:00.000Z",
    event_type: "Concert",
    ticket_type: "VIP",
    order_id: "0012347",
    venue: "Eko Hotel, Lagos",
    time: "2024-06-10T00:00:00.000Z",
    ticket_price: "₦5000",
    ticket_quantity: "3",
    ticket_total: "₦5000",
    ticket_status: "Active",
    ticket_id: "0012347",
    ticket_qr_code:
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=0012347",
  };

  const [modalVisible, setModalVisible] = useState(false);

  if (loaded) {
    SplashScreen.preventAutoHideAsync();
  }

  useEffect(() => {
    async function prepare() {
      SplashScreen.preventAutoHideAsync();
      console.log("Images are loading");
    }
    if (loaded) {
      prepare();
    }
  }, [loaded]);

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

  const lastItemArr = images.length - 1;
  return (
    <LayoutContainer>
      <View className="mb-[14]">
        <FontText className="mb-[8px] text-[16px] leading-[24px]">
          Find event in;
        </FontText>
        <View className="flex-row mb-[16]">
          <FontText className="font-semibold font-satoshiSemiBold text-[23px] leading-[32px]">
            Lekki, Lagos
          </FontText>
          <TouchableOpacity className="w-fit ml-2">
            <MaterialCommunityIcons
              name="chevron-down"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row rounded-[25px] py-[8] px-[15] bg-[#DAD8D8]/40 border-[1px] border-[#DAD8D8] mb-[10]">
          <Feather name="search" size={22} color="grey" />
          <TextInput
            className="text-[20px] mx-2 font-regular font-satoshiRegular"
            editable
            numberOfLines={4}
            maxLength={40}
            onChangeText={(text) => onChangeText(text)}
            placeholder="Search events"
            // value={value}
          />
          <TouchableOpacity className="ml-auto w-fit">
            <Ionicons name="filter" size={20} color="grey" />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          width,
          marginLeft: insets.left - 20,
          marginBottom: 20,
        }}
      >
        <FontText className="mb-[15] ml-[20] font-satoshiBold text-[25px] leading-[28px]">
          Featured Events
        </FontText>
        <FlatList
          className="pl-[20]"
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={images}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() =>
                paidEvent === false
                  ? navigation.navigate("EventDetails", {
                      id: 12,
                      data: "anything you want here",
                    })
                  : setModalVisible(true)
              }
            >
              <EventMainCard
                item={item}
                setLoaded={setLoaded}
                imageWidth={imageWidth}
                containerStyle={{
                  marginRight: index === lastItemArr ? 38 : 6,
                }}
              />
            </Pressable>
          )}
        />
      </View>
      <View
        className="mb-[16]"
        style={{
          height: 270,
        }}
      >
        <View className="flex flex-row items-center justify-between mb-[15]">
          <FontText className="font-satoshiBold text-[25px] leading-[28px]">
            Trending Events
          </FontText>
          <TouchableOpacity>
            <FontText className="text-[18px] leading-[20px]">view all</FontText>
          </TouchableOpacity>
        </View>
        <FlatList
          vertical
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={images}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() =>
                paidEvent === false
                  ? navigation.navigate("EventDetails", {
                      id: 12,
                      data: "anything you want here",
                    })
                  : setModalVisible(true)
              }
            >
              <EventOtherCard item={item} setLoaded={setLoaded} />
            </Pressable>
          )}
        />
      </View>
      <TicketDetailsModal
        detailsData={ticketDetailsData}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </LayoutContainer>
  );
}
