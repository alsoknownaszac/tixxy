import React, { useState } from "react";
import LayoutContainer from "../../Layout/LayoutContainer";
import FontText from "../../reuseable/FontText";
import {
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { FlatList } from "react-native";
import EventMainCard from "../../reuseable/EventMainCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TicketDetailsModal from "../components/EventDetails/TicketDetailsModal";
import { useGlobalReducer, useGlobalState } from "../../lib/appContext";

export default function Ticket({ navigation }) {
  const { event } = useGlobalState();
  const dispatch = useGlobalReducer();

  const [paidEvent, setPaidEvent] = useState(true);

  console.log(paidEvent);

  const { width, height } = useWindowDimensions();

  const imageWidth = width - 40;
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

  const lastItemArr = images.length - 1;

  return (
    <LayoutContainer>
      <View className="mb-[10] flex items-center py-[13]">
        <FontText className="mb-[8px] text-[18px] leading-[24px] font-chillaxMedium">
          Tickets
        </FontText>
      </View>

      <View
        style={{
          width,
          marginBottom: 20,
        }}
      >
        <FontText className="mb-[15] font-satoshiBold text-[25px] leading-[28px]">
          Today
        </FontText>
        <FlatList
          // className="pl-[20]"
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={images}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() =>
                paidEvent === false
                  ? navigation.navigate("EventDetails")
                  : setModalVisible(true)
              }
            >
              <EventMainCard
                item={item}
                setLoaded={setLoaded}
                imageWidth={imageWidth}
                containerStyle={{
                  marginRight: index === lastItemArr ? 38 : 8,
                }}
              />
            </Pressable>
          )}
        />
      </View>
      <TicketDetailsModal
        detailsData={ticketDetailsData}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View
        // className="mb-[16]"
        style={{
          height: height / 2.34,
        }}
      >
        <TouchableOpacity
          onPress={() =>
            dispatch({
              type: "eventPaidBool",
            })
          }
        >
          <FontText className="mb-[15] font-satoshiBold text-[25px] leading-[28px]">
            CLICK
          </FontText>
        </TouchableOpacity>
        <FontText className="mb-[15] font-satoshiBold text-[25px] leading-[28px]">
          Upcoming
        </FontText>
        <FlatList
          vertical
          nestedScrollEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={images}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() =>
                paidEvent === false
                  ? navigation.navigate("EventDetails")
                  : setModalVisible(true)
              }
            >
              <EventMainCard
                item={item}
                setLoaded={setLoaded}
                imageWidth={imageWidth}
                containerStyle={{
                  marginBottom: index === lastItemArr ? 20 : 15,
                }}
              />
            </Pressable>
          )}
        />
      </View>
    </LayoutContainer>
  );
}
