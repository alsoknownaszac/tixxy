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
import { Feather, Ionicons } from "@expo/vector-icons";

export default function RegisterGuest({ navigation }) {
  const [guestList, setGuestList] = useState(0);

  // const isFocused = useIsFocused();

  return (
    <LayoutContainer>
      {guestList == 0 ? (
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
            <View className="mt-[30]">
              <FontText className="font-chillaxSemibold text-[17px] leading-[24px] mb-[10] text-[#595959]">
                Description
              </FontText>
              <View className="rounded-[10px] py-[14] px-[14] bg-[#DAD8D8]/20 border border-[#DAD8D8]">
                <TextInput
                  className="text-[17px]"
                  editable
                  multiline={true}
                  numberOfLines={10}
                  maxLength={200}
                  onChangeText={(text) => onChangeText(text)}
                  placeholder="Give a brief description of the event"
                  style={{
                    height: 80,
                    textAlignVertical: "top",
                  }}
                  // value={value}
                />
              </View>
            </View>
            <View className="mt-[30]">
              <FontText className="font-chillaxSemibold text-[17px] leading-[24px] mb-[10] text-[#595959]">
                Questions
              </FontText>
              <View className="rounded-[12px] py-[14] px-[14] bg-[#DAD8D8]/20 border border-[#DAD8D8]"></View>
            </View>
          </View>
        </View>
      ) : (
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
                Guests will be added
              </FontText>
              <FontText className="font-chillMedium text-center text-[23px] leading-[28px] text-[#595959]">
                once they fill the form
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
      )}
    </LayoutContainer>
  );
}
