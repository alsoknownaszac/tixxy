import React, { useEffect, useState } from "react";
import {
  Animated,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import FontText from "../../../reuseable/FontText";
import LayoutContainer from "../../../Layout/LayoutContainer";
import BackArrow from "../../../../assets/icons/back_arrow.svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";

export default function AddEvent({ navigation }) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const [selectedImage, setSelectedImage] = useState(undefined);

  const [eventRadioSelected] = useState([
    { selected: 1, label: "in person" },
    { selected: 2, label: "online" },
  ]);

  const [eventTypeRadio, setEventTypeRadio] = useState({
    selected: 0,
    label: "",
  });

  const handleRadioSelect = (radio) => {
    radio.selected == 1
      ? setEventTypeRadio({ selected: 1, label: "in person" })
      : radio.selected == 2
      ? setEventTypeRadio({ selected: 2, label: "online" })
      : {
          selected: 0,
          label: "",
        };
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

  console.log(eventTypeRadio);

  return (
    <LayoutContainer noSafeAreaProfile>
      <View
        style={{
          paddingTop: insets.top + 20,
          paddingLeft: insets.left + 20,
          paddingRight: insets.right + 20,
        }}
      >
        <View className="flex-initial rounded-b-[20px]">
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
              <FontText className="font-chillaxSemibold text-center text-[18px] leading-[24px] text-[#2A2B2A]">
                Create Event
              </FontText>
            </View>
            <View className="w-1/6" />
          </View>
        </View>
      </View>
      <ProgressBar progressFrom={0} progressTo={50} />
      <View
        style={{
          paddingTop: 35,
          paddingLeft: insets.left + 20,
          paddingRight: insets.right + 20,
        }}
        className="flex-1 mt-[22]"
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
              <FontText className="text-[#2A2B2A] text-center text-[12px] font-chillaxMedium leading-[130%0]">
                Choose File
              </FontText>
            </TouchableOpacity>
          </View>
        </View>
        <View className="mt-[30]">
          <FontText className="font-chillaxSemibold text-[14px] leading-[20px] text-[#595959]">
            Event Type
          </FontText>
          <View className="flex flex-col">
            {eventRadioSelected.map((radio) => (
              <TouchableOpacity
                key={radio.selected}
                onPress={() => handleRadioSelect(radio)}
              >
                <RadioButton
                  selected={radio.selected == eventTypeRadio.selected}
                />
                <FontText className="font-chillaxSemibold text-[14px] leading-[20px] text-[#595959]">
                  {radio.label}
                </FontText>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* <ImageViewer
          imgSource={PlaceholderImage}
          selectedImage={selectedImage}
        /> */}
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
      duration: 2000,
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
////////
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
