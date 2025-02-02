import React, { useEffect, useState } from "react";
import {
  Animated,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import FontText from "../../../reuseable/FontText";
import LayoutContainer from "../../../Layout/LayoutContainer";
import BackArrow from "../../../../assets/icons/back_arrow.svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { DropdownMenu, MenuOption } from "../../../reuseable/DropDown";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function AddEvent({ navigation }) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const [sectionPage, setSectionPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(undefined);

  const [eventRadioSelected] = useState([
    { selected: 0, label: "" },
    { selected: 1, label: "in person" },
    { selected: 2, label: "online" },
  ]);

  const [eventTypeRadio, setEventTypeRadio] = useState(eventRadioSelected[0]);

  const handleRadioSelect = (radio) => {
    switch (radio.selected) {
      case 1:
        setEventTypeRadio(eventRadioSelected[1]);
        break;
      case 2:
        setEventTypeRadio(eventRadioSelected[2]);
        break;
      default:
        eventRadioSelected[0];
        break;
    }
  };

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  const [visible, setVisible] = useState(false);

  const [eventDropdownSelected] = useState([
    { selected: 1, label: "private" },
    { selected: 2, label: "public" },
  ]);

  const [eventTypeDropdown, setEventTypeDropdown] = useState({
    selected: 0,
    label: "",
  });

  console.log(sectionPage);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <LayoutContainer noSafeAreaProfile>
      <View
        style={{
          paddingTop: insets.top,
          paddingLeft: insets.left + 20,
          paddingRight: insets.right + 20,
        }}
      >
        <View className="flex-initial rounded-b-[20px]">
          <View className="py-[20px] flex flex-row justify-between items-center ">
            <View className="w-1/6">
              <Pressable
                onPress={() =>
                  sectionPage != 0
                    ? setSectionPage(sectionPage - 1)
                    : navigation.goBack()
                }
              >
                <BackArrow
                  width={26}
                  height={26}
                  strokeWidth={1}
                  stroke="#9A9898"
                />
              </Pressable>
            </View>
            <View className="w-2/6">
              <FontText className="font-chillaxSemibold text-center text-[17px] leading-[24px] text-[#2A2B2A]">
                Create Event
              </FontText>
            </View>
            <View className="w-1/6" />
          </View>
        </View>
      </View>
      <ProgressBar
        progressFrom={sectionPage == 0 ? 0 : sectionPage == 1 ? 33.33 : 66.66}
        progressTo={sectionPage == 0 ? 33.33 : sectionPage == 1 ? 66.66 : 100}
      />
      {sectionPage == 0 ? (
        <ScrollView
          style={{
            paddingTop: 35,
            paddingLeft: insets.left + 20,
            paddingRight: insets.right + 20,
          }}
          className="flex-1"
        >
          <View className="border border-[#DAD8D8] rounded-[20px] h-[128px]">
            <View className="m-auto">
              <FontText className="font-chillaxRegular text-center text-[14px] leading-[20px] text-[#595959]">
                PNG, JPG, WEBP Max 10mb.
              </FontText>
              <TouchableOpacity
                onPress={pickImageAsync}
                className="py-[12] bg-[#EBEBEB] w-[123px] rounded-[100px] mt-[12] mx-auto"
              >
                <FontText className="text-[#2A2B2A] text-center text-[14px] font-chillaxMedium leading-[130%0]">
                  Choose File
                </FontText>
              </TouchableOpacity>
            </View>
          </View>
          <View className="mt-[30]">
            <FontText className="font-chillaxSemibold text-[17px] leading-[24px] mb-[10] text-[#595959]">
              Event Type
            </FontText>
            <View className="flex flex-row gap-[24px] items-center">
              {eventRadioSelected.map(
                (radio, indx) =>
                  indx > 0 && (
                    <TouchableOpacity
                      key={radio.selected}
                      onPress={() => handleRadioSelect(radio)}
                      className="flex flex-row gap-[6.5px]"
                    >
                      <RadioButton
                        selected={radio.selected == eventTypeRadio.selected}
                      />
                      <FontText className="font-trapRegular capitalize text-[17px] leading-[24px] text-[#595959]">
                        {radio.label}
                      </FontText>
                    </TouchableOpacity>
                  )
              )}
            </View>
          </View>
          <View className="mt-[30]">
            <FontText className="font-chillaxSemibold text-[17px] leading-[24px] mb-[10] text-[#595959]">
              Event Name
            </FontText>
            <View className="rounded-[10px] py-[14] px-[14] bg-[#DAD8D8]/20 border border-[#DAD8D8]">
              <TextInput
                className="text-[17px]"
                editable
                numberOfLines={4}
                maxLength={40}
                onChangeText={(text) => onChangeText(text)}
                placeholder="Enter Event Name"
                // value={value}
              />
            </View>
          </View>
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
              Privacy
            </FontText>
            <DropdownMenu
              visible={visible}
              handleOpen={() => setVisible(true)}
              handleClose={() => setVisible(false)}
              trigger={
                <View className="flex flex-row justify-between items-center rounded-[10px] w-[180] py-[14] px-[14] bg-[#DAD8D8]/10 border border-[#DAD8D8]">
                  <FontText className="font-trapRegular capitalize text-[17px] leading-[20px] text-[#595959]">
                    {eventTypeDropdown.selected != 0
                      ? eventTypeDropdown.label
                      : "please select"}
                  </FontText>
                  {visible === false ? (
                    <AntDesign name="caretdown" size={11} color="black" />
                  ) : (
                    <AntDesign name="caretup" size={11} color="black" />
                  )}
                </View>
              }
            >
              {eventDropdownSelected.map((menuOption) => (
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
              ))}
            </DropdownMenu>
          </View>
          <CustomDropdown dropdownList={eventDropdownSelected} name="Privacy" />

          {/* <ImageViewer
          imgSource={PlaceholderImage}
          selectedImage={selectedImage}
        /> */}
        </ScrollView>
      ) : sectionPage == 1 ? (
        <ScrollView
          style={{
            paddingTop: 35,
            paddingLeft: insets.left + 20,
            paddingRight: insets.right + 20,
          }}
          className="flex-1"
        >
          <View className="flex flex-row items-center justify-between">
            <View>
              <FontText className="font-chillaxSemibold text-[17px] leading-[24px] mb-[3] text-[#595959]">
                Multi Day Event
              </FontText>
              <FontText className="font-chillaxNormal text-[17px] leading-[24px] text-[#595959]">
                The events lasts longer than a day
              </FontText>
            </View>
            <Switch
              trackColor={{ false: "#F7F7F7", true: "#E4E0F5" }}
              thumbColor={isEnabled ? "#7E62F0" : "#9A9898"}
              style={{
                transform: [{ scaleX: 0.85 }, { scaleY: 0.8 }],
                marginVertical: -8,
              }}
              ios_backgroundColor="#F7F7F7"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View className="flex flex-row items-center justify-between mt-[30]">
            <View>
              <FontText className="font-chillaxSemibold text-[17px] leading-[24px] mb-[3] text-[#595959]">
                Date
              </FontText>
              {/* <FontText className="font-chillaxNormal text-[17px] leading-[24px] text-[#595959]">
                The events lasts longer than a day
              </FontText> */}
            </View>
            <View>
              <FontText className="font-chillaxSemibold text-[17px] leading-[24px] mb-[3] text-[#595959]">
                Start Time
              </FontText>
              {/* <FontText className="font-chillaxNormal text-[17px] leading-[24px] text-[#595959]">
                The events lasts longer than a day
              </FontText> */}
            </View>
          </View>
        </ScrollView>
      ) : (
        <ScrollView
          style={{
            paddingTop: 35,
            paddingLeft: insets.left + 20,
            paddingRight: insets.right + 20,
          }}
          className="flex-1"
        ></ScrollView>
      )}
      <View className="p-[16]">
        <TouchableOpacity
          onPress={() =>
            sectionPage != 2
              ? setSectionPage(sectionPage + 1)
              : console.log("finished")
          }
          className="py-[12] bg-[#7E62F0] w-full rounded-[100px] mt-[10] mb-[27] "
        >
          <FontText className="text-white text-center text-[18px] font-chillaxMedium leading-[150%]">
            {sectionPage != 2 ? "Proceed" : "Finish"}
          </FontText>
        </TouchableOpacity>
      </View>
    </LayoutContainer>
  );
}

const ProgressBar = ({ progressFrom, progressTo }) => {
  const styles = StyleSheet.create({
    container: {
      height: 1.5,
      width,
      backgroundColor: "#EBEBEB",
    },
    bar: {
      height: 1.5,
      backgroundColor: "#7E62F0",
    },
  });
  const { width } = useWindowDimensions();

  const [progressWidth] = useState(width / 100);
  const [progress] = useState(new Animated.Value(progressFrom * progressWidth));

  useEffect(() => {
    Animated.timing(progress, {
      toValue: progressTo * progressWidth,
      duration: 800,
    }).start();
  }, [progressTo, progress]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bar, { width: progress }]} />
    </View>
  );
};

// const animatedWidth = animatedValue.interpolate({
//   inputRange: [0, 100],
//   outputRange: ['0%', '100%'],
// });

function ImageViewer({ imgSource, selectedImage }) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return <Image source={imageSource} style={stylesImageViewer.image} />;
}

const stylesImageViewer = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

function RadioButton(props) {
  return (
    <View
      style={[
        {
          height: 19,
          width: 19,
          borderRadius: 100,
          borderWidth: 2,
          borderColor: "#9A9898",
          alignItems: "center",
          justifyContent: "center",
        },
        props.style,
      ]}
    >
      {props.selected ? (
        <View
          style={{
            height: "70%",
            width: "70%",
            borderRadius: 100,
            backgroundColor: "#7E62F0",
          }}
        />
      ) : null}
    </View>
  );
}

function CustomDropdown({ dropdownList, name }) {
  const [visible, setVisible] = useState(false);

  const [eventDropdownSelected] = useState([
    { selected: 0, label: "" },
    [...dropdownList],
  ]);

  const [eventTypeDropdown, setEventTypeDropdown] = useState(
    eventDropdownSelected[0]
  );

  return (
    <View className="mt-[30]">
      <FontText className="font-chillaxSemibold text-[17px] leading-[24px] mb-[10] text-[#595959]">
        {name}
      </FontText>
      <DropdownMenu
        visible={visible}
        handleOpen={() => setVisible(true)}
        handleClose={() => setVisible(false)}
        trigger={
          <View className="flex flex-row justify-between items-center rounded-[10px] w-[180] py-[14] px-[14] bg-[#DAD8D8]/10 border border-[#DAD8D8]">
            <FontText className="font-trapRegular capitalize text-[17px] leading-[20px] text-[#595959]">
              {eventTypeDropdown.selected != 0
                ? eventTypeDropdown.label
                : "please select"}
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
    </View>
  );
}
