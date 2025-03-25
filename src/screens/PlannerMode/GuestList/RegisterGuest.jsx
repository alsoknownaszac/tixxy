import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
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
import CheckBox from "react-native-check-box";
import AntDesign from "@expo/vector-icons/AntDesign";
import GuestListModal from "../../components/GuestList/GuestListModal";

export default function RegisterGuest({ navigation }) {
  const [guestList, setGuestList] = useState(0);

  const [listInfo] = useState([
    { id: 1, checked: false, title: "Full Name" },
    { id: 1, checked: false, title: "Email" },
    { id: 1, checked: false, title: "Phone Number" },
    { id: 1, checked: false, title: "Relationship" },
    { id: 1, checked: false, title: "Address" },
  ]);

  const { width, height } = useWindowDimensions();
  const imageWidth = width - 40;

  const [loaded, setLoaded] = useState(false);

  const modalDetails = {
    width: imageWidth,
    setLoaded,
  };

  const [modalVisible, setModalVisible] = useState(false);
  // const isFocused = useIsFocused();

  return (
    <LayoutContainer>
      {guestList == 0 ? (
        <View className="flex-1">
          <View>
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
                <View className="w-1/6"></View>
              </View>
            </View>
            <View className="flex">
              <View className="mt-[20] w-2/3 mx-auto">
                <FontText className="font-chillaxNormal text-center font- text-[17px] leading-[24px] mb-[10] text-[#595959]">
                  Select information to be filled in to create a guest
                </FontText>
              </View>
            </View>
            <FlatList
              vertical
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              data={listInfo}
              renderItem={({ item, index }) => <Checklist item={item} />}
            />
            <TouchableOpacity onPress={() => setGuestList(1)}>
              <View className="w-2/4 bg-[#F7F7F7] p-[8px] rounded-[10px] flex flex-row justify-center items-center mt-[20]">
                <AntDesign name="plus" size={20} color="black" />
                <FontText className="ml-[8] font-chillaxNormal text-center text-[16px] leading-[18px] text-[#595959]">
                  Add Input field
                </FontText>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              bottom: 0,
              position: "absolute",
              width: "100%",
              padding: 16,
            }}
          >
            <TouchableOpacity
              onPress={() => setGuestList(1)}
              className="py-[12] bg-[#7E62F0] w-full rounded-[100px] mt-[10] mb-[27] "
            >
              <FontText className="text-white text-center text-[18px] font-chillaxMedium leading-[150%]">
                Proceed
              </FontText>
            </TouchableOpacity>
          </View>
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
          <TouchableOpacity
            style={{ bottom: 0, right: 0, position: "absolute" }}
            onPress={() => setModalVisible(true)}
          >
            <AddEventIcon
              width={95}
              height={95}
              strokeWidth={0.3}
              fill="none"
            />
          </TouchableOpacity>
          <GuestListModal
            detailsData={modalDetails}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </View>
      )}
    </LayoutContainer>
  );
}

function Checklist({ item }) {
  const [isChecked, setSelection] = useState(false);

  return (
    <View className="flex flex-row items-center justify-center">
      <CheckBox
        className="flex-1 py-[10]"
        onClick={() => {
          setSelection(!isChecked);
        }}
        isChecked={isChecked}
        rightText={item.title}
      />
    </View>
  );
}
