import React, { useEffect, useState } from "react";
import {
  Animated,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import FontText from "../../../reuseable/FontText";
import LayoutContainer from "../../../Layout/LayoutContainer";
import BackArrow from "../../../../assets/icons/back_arrow.svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AddEvent({ navigation }) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

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
      ></View>
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
// });
