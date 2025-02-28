import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Pressable,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import FontText from "../../reuseable/FontText";
import BackArrow from "../../../assets/icons/back_arrow.svg";
import BackArrow from "../../../assets/icons/back_arrow.svg";
import MoreBtn from "../../../assets/icons/more_icon.svg";
import PaymentListCard from "./components/PaymentListCard";

export default function PaymentMethods({ navigation }) {
  const [guestTab] = useState([
    {
      title: "Share link with Guest",
      info: "To share a link with your guest, you need to create a form questionnaire that includes the details of your quests that you need, for example their names, phone numbers etc. thereafter you share the link to the people you want present, and they fill the form to get their details saved.",
      // icon: (
      //   <SendIcon width={24} height={24} strokeWidth={1} stroke="#2A2B2A" />
      // ),
      btn_name: "Create Form",
      btn_link: "CreateForm",
      key: 1,
    },
    {
      title: "Register Guest",
      info: "Share link with guest Register guest To register guests, you need to manually enter the details of guests, for example their names or phone numbers. thereafter you send their invitations to them.",
      // icon: (
      //   <KeyboardIcon width={24} height={24} strokeWidth={1} stroke="#2A2B2A" />
      // ),
      btn_name: "Register Guest",
      btn_link: "RegisterGuest",
      key: 2,
    },
    {
      title: "Import list",
      info: "To Import guest list, you should create the guest list in a spread sheet or pdf in a table format and then upload.",
      // icon: (
      //   <ImportIcon width={24} height={24} strokeWidth={1} stroke="#2A2B2A" />
      // ),
      btn_name: "Import List",
      btn_link: "ImportList",
      key: 3,
    },
  ]);

  return (
    <View className="flex-1 bg-[#FCFCFC]">
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
              Select Payment Method
            </FontText>
          </View>
          <View className="w-1/6">
            <Pressable className="ml-auto" onPress={() => {}}>
              <MoreBtn
                width={26}
                height={26}
                strokeWidth={1}
                stroke="#9A9898"
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View className="pt-[20px] pb-[30px]">
        <View className="flex">
          <View className="w-[375px] mx-auto">
            <FlatList
              vertical
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              data={guestTab}
              renderItem={({ item, index }) => (
                <PaymentListCard {...{ item, index }} />
              )}
            />
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
