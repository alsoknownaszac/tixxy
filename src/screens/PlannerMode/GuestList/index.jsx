import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LayoutContainer from "../../../Layout/LayoutContainer";
import BackArrow from "../../../../assets/icons/back_arrow.svg";
import MoreBtn from "../../../../assets/icons/more_icon.svg";
import NoGuestSvg from "../../../../assets/icons/no_guest.svg";
import SendIcon from "../../../../assets/icons/send_icon.svg";
import KeyboardIcon from "../../../../assets/icons/keyboard_icon.svg";
import ImportIcon from "../../../../assets/icons/import_icon.svg";
import AddEventIcon from "../../../../assets/icons/add_event.svg";
import FontText from "../../../reuseable/FontText";
import GuestListCard from "./components/GuestListCard";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function GuestList({ navigation }) {
  const [dataList] = useState([]);
  const [guestList, setGuestList] = useState(dataList.length == [] ? 0 : 1);

  const [guestTab] = useState([
    {
      title: "Share link with Guest",
      info: "To share a link with your guest, you need to create a form questionnaire that includes the details of your quests that you need, for example their names, phone numbers etc. thereafter you share the link to the people you want present, and they fill the form to get their details saved.",
      icon: (
        <SendIcon width={24} height={24} strokeWidth={1} stroke="#2A2B2A" />
      ),
      btn_name: "Create Form",
      btn_link: "CreateForm",
      key: 1,
    },
    {
      title: "Register Guest",
      info: "Share link with guest Register guest To register guests, you need to manually enter the details of guests, for example their names or phone numbers. thereafter you send their invitations to them.",
      icon: (
        <KeyboardIcon width={24} height={24} strokeWidth={1} stroke="#2A2B2A" />
      ),
      btn_name: "Register Guest",
      btn_link: "RegisterGuest",
      key: 2,
    },
    // {
    //   title: "Import list",
    //   info: "To Import guest list, you should create the guest list in a spread sheet or pdf in a table format and then upload.",
    //   icon: (
    //     <ImportIcon width={24} height={24} strokeWidth={1} stroke="#2A2B2A" />
    //   ),
    //   btn_name: "Import List",
    //   btn_link: "ImportList",
    //   key: 3,
    // },
  ]);

  // const isFocused = useIsFocused();

  return (
    <LayoutContainer>
      {guestList == 0 ? (
        <View className="flex-1">
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
                  Guest List
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
            <View className="flex-row rounded-[25px] py-[8] px-[15] bg-[#F7F7F7] mb-[10]">
              <Feather name="search" size={22} color="grey" />
              <TextInput
                className="text-[20px] mx-2 font-regular font-satoshiRegular"
                editable
                numberOfLines={4}
                maxLength={40}
                onChangeText={(text) => onChangeText(text)}
                placeholder="0 Guest"
                // value={value}
              />
            </View>
          </View>

          <View className="flex flex-col my-[50px]">
            <View className="my-auto">
              <NoGuestSvg
                width={300}
                height={177}
                // strokeWidth={1}
                // stroke="#9A9898"
              />
            </View>
            <View className="mt-[24px]">
              <FontText className="font-chillMedium text-center text-[23px] leading-[28px] text-[#595959]">
                You have no guests,
              </FontText>
              <FontText className="font-chillMedium text-center text-[23px] leading-[28px] text-[#595959]">
                Click + to add guests
              </FontText>
            </View>
          </View>
          <TouchableOpacity
            style={{ bottom: 0, right: 0, position: "absolute" }}
            onPress={() => setGuestList(1)}
          >
            <AddEventIcon
              width={95}
              height={95}
              strokeWidth={0.3}
              fill="none"
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <View className="mb-[22] flex-initial rounded-b-[20px]">
            <View className="py-[20px] flex flex-row justify-between items-center ">
              <View className="w-1/6">
                <Pressable onPress={() => setGuestList(0)}>
                  <BackArrow
                    width={26}
                    height={26}
                    strokeWidth={1}
                    stroke="#9A9898"
                  />
                </Pressable>
              </View>
              <View className="w-4/6">
                <FontText className="font-chillaxMedium text-center text-[16px] leading-[24px] text-[#2A2B2A]">
                  Create Guest List
                </FontText>
              </View>
              <View className="w-1/6"></View>
            </View>
          </View>

          <View className="flex">
            <View className="w-[311px] mx-auto">
              <FlatList
                vertical
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={guestTab}
                renderItem={({ item, index }) => (
                  <GuestListCard {...{ item, index }} />
                )}
              />
            </View>
          </View>
        </View>
      )}
    </LayoutContainer>
  );
}
