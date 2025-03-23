import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  Switch,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LayoutContainer from "../../../Layout/LayoutContainer";
import BackArrow from "../../../../assets/icons/back_arrow.svg";
import MoreBtn from "../../../../assets/icons/more_icon.svg";
import NoGuestSvg from "../../../../assets/icons/no_guest.svg";
import WhiteCheck from "../../../../assets/icons/white_check.svg";
import AddEventIcon from "../../../../assets/icons/add_event.svg";
import FontText from "../../../reuseable/FontText";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import { DropdownMenu, MenuOption } from "../../../reuseable/DropDown";

export default function CreateForm({ navigation }) {
  const [guestList, setGuestList] = useState(0);

  // const isFocused = useIsFocused();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  //   ..
  const [visible, setVisible] = useState(false);

  const [eventDropdownSelected] = useState([
    { selected: 0, label: "" },
    [
      { selected: 1, label: "private" },
      { selected: 2, label: "public" },
    ],
  ]);

  const [eventTypeDropdown, setEventTypeDropdown] = useState(
    eventDropdownSelected[0]
  );

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
              <View className="w-4/6">
                <FontText className="font-chillaxMedium text-center text-[16px] leading-[24px] text-[#2A2B2A]">
                  Create Guest List
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

          <View className="">
            <View className="mt-[14]">
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
                  placeholder="Give a brief explanation of the questionnaire and it’s importance"
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
              <View className="rounded-[12px] p-[16] border border-[#DAD8D8]">
                <View className="flex flex-row justify-between items-center">
                  <FontText className="font-chillaxMedium text-[17px] leading-[24px] text-[#595959]">
                    Question 1
                  </FontText>
                  <View className="flex flex-row gap-[14] items-center">
                    <Feather name="download" size={18} color="#9A9898" />
                    <Feather name="trash-2" size={18} color="#9A9898" />
                  </View>
                </View>
                <View className="mt-[16px] rounded-[10px] py-[14] px-[14] bg-[#DAD8D8]/20 border border-[#DAD8D8]">
                  <TextInput
                    className="text-[17px]"
                    editable
                    numberOfLines={4}
                    maxLength={40}
                    onChangeText={(text) => onChangeText(text)}
                    placeholder="e.g What's your name?"
                    // value={value}
                  />
                </View>
                <View className="mt-[16px] flex flex-row justify-between items-center">
                  <DropdownMenu
                    dropdownWidth={130}
                    visible={visible}
                    handleOpen={() => setVisible(true)}
                    handleClose={() => setVisible(false)}
                    trigger={
                      <View
                        style={{ width: 130 }}
                        className="flex flex-row justify-between items-center rounded-[10px] py-[14] px-[14] bg-[#DAD8D8]/10 border border-[#DAD8D8]"
                      >
                        <FontText className="font-trapRegular capitalize text-[14px] leading-[20px] text-[#595959]">
                          {eventTypeDropdown.selected != 0
                            ? eventTypeDropdown.label
                            : "short answer"}
                        </FontText>
                        {visible === false ? (
                          <AntDesign name="caretdown" size={11} color="black" />
                        ) : (
                          <AntDesign name="caretup" size={11} color="black" />
                        )}
                      </View>
                    }
                  >
                    {eventDropdownSelected.map(
                      (menuOption, indx) =>
                        indx > 0 && (
                          <MenuOption
                            key={menuOption.selected}
                            onSelect={() => {
                              setEventTypeDropdown(menuOption);
                              setVisible(false);
                            }}
                          >
                            <FontText className="font-trapRegular capitalize text-center text-[14px] leading-[20px] text-[#595959]">
                              {menuOption.label}
                            </FontText>
                          </MenuOption>
                        )
                    )}
                  </DropdownMenu>
                  <View className="flex flex-row gap-[4] items-center">
                    <FontText className="font-chillaxMedium text-[17px] leading-[24px] text-[#595959]">
                      Required
                    </FontText>
                    <Switch
                      trackColor={{ false: "#F7F7F7", true: "#E4E0F5" }}
                      thumbColor={isEnabled ? "#7E62F0" : "#9A9898"}
                      style={{
                        transform: [{ scaleX: 0.85 }, { scaleY: 0.8 }],
                      }}
                      ios_backgroundColor="#F7F7F7"
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View className="mt-[30] mx-auto">
              <WhiteCheck
                width={32}
                height={32}
                strokeWidth={1}
                stroke="#9A9898"
              />
            </View>
          </View>
          <TouchableOpacity
            style={{ bottom: 30, right: 15, position: "absolute" }}
            onPress={() => setGuestList(1)}
          >
            <Ionicons name="arrow-forward-circle" size={60} color="#7E62F0" />
          </TouchableOpacity>
        </View>
      ) : (
        <View className="flex-1">
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
          {/* <TouchableOpacity
            style={{ bottom: 0, right: 0, position: "absolute" }}
            onPress={() => setGuestList(1)}
          >
            <AddEventIcon
              width={95}
              height={95}
              strokeWidth={0.3}
              fill="none"
            />
          </TouchableOpacity> */}
        </View>
      )}
    </LayoutContainer>
  );
}
