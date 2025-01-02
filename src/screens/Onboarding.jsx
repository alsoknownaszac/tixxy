import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  Animated,
  FlatList,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import FontText from "../reuseable/FontText";
import LayoutContainer from "../Layout/LayoutContainer";

const onBoardingImage = require("../../assets/images/onboarding_img.png");

const textData = [
  {
    id: "1",
    header: "Find events \n around the globe",
    text: "Find events you'd love to join and register for the event",
  },
  {
    id: "2",
    header: "Easily create \n an events",
    text: "Create events that are In-person, Virtual, Free or paid all in one platform.",
  },
  {
    id: "3",
    header: "Create and manage your guest list",
    text: "Curate a guest list for your event and invite your guest with ease..",
  },
];

function TextList({ item }) {
  return (
    <View className="justify-end h-full relative w-screen -top-[23] px-[30] flex-1">
      <FontText className="font-bold font-satoshiBold mb-[12] text-[30px] text-center leading-[38px]">
        {item.header}
      </FontText>
      <FontText className="font-normal mb-[16] text-[16px] text-center leading-[24px]">
        {item.text}
      </FontText>
    </View>
  );
}

export default function Onboarding({ navigation }) {
  const { width } = useWindowDimensions();

  const [initIndex, setInitIndex] = useState();

  const textDataRef = useRef(null);

  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setInitIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({
    waitForInteraction: true,
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const insets = useSafeAreaInsets();

  const scrollTo = () => {
    if (initIndex < textData.length - 1) {
      textDataRef.current.scrollToIndex({ index: initIndex + 1 });
    } else {
      navigation.navigate("SignUp");
    }
  };

  const propsContainer = {
    className: "flex-1 bg-[#FCFCFC]",
  };

  return (
    <LayoutContainer {...propsContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("SignUp")}
        className="self-end mb-[60] h-fit"
      >
        <FontText
          adjustsFontSizeToFit={true}
          numberOfLines={1}
          className="font-medium text-[16px] text-[#7E62F0]"
        >
          Skip
        </FontText>
      </TouchableOpacity>
      <View className="relative w-full h-[440] overflow-hidden mb-[24] -top-[5]">
        <View className="items-center relative self-stretch">
          <Image
            className="drop-shadow-xl w-[260] h-[520]"
            source={onBoardingImage}
            resizeMode="cover"
            blurRadius={1}
          />
        </View>

        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.4 }}
          colors={["rgba(252, 252, 252, 0.15)", "#FCFCFC"]}
          style={{
            flex: 3,
            height: "75%",
            width,
            alignSelf: "center",
            position: "absolute",
            bottom: 0,
          }}
        >
          <FlatList
            data={textData}
            renderItem={({ item }) => (
              <TextList item={item} data={textData} scrollX={scrollX} />
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={16}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={textDataRef}
          />
          <Paginator data={textData} scrollX={scrollX} />
        </LinearGradient>
      </View>

      <TouchableOpacity
        onPress={scrollTo}
        // scrollTo={scrollTo}
        className="py-[12] bg-[#7E62F0] w-full rounded-[100px] mt-[10] "
      >
        <FontText className="text-white text-center text-[16px] font-bold font-chillaxSemibold leading-[150%]">
          Get Started
        </FontText>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </LayoutContainer>
  );
}

function Paginator({ data, scrollX }) {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        top: -15,
        flexDirection: "row",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [7, 30, 7],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1, 0.8],
          extrapolate: "clamp",
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ["#DAD8D8", "#7E62F0", "#DAD8D8"],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={{
              width: dotWidth,
              opacity,
              borderRadius: 5,
              height: 5,
              marginHorizontal: 8,
              backgroundColor,
            }}
            key={i.toString() + Math.floor()}
          />
        );
      })}
    </View>
  );
}
