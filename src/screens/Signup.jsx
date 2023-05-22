import React from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  Animated,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SvgLeft, SvgRight } from "../reuseable/SignUpSvg";

export default function Signup({ navigation }) {
  const insets = useSafeAreaInsets();

  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flex: 1,
        width,
        justifyContent: "flex-start",
        paddingTop: insets.top + 20,
        paddingBottom: insets.bottom + 20,
        paddingLeft: insets.left + 20,
        paddingRight: insets.right + 20,
      }}
    >
      <View className="py-[48]">
        <View className="mb-[20]">
          <Text className="text-center" style={{ fontSize: 32 }}>
            Sign Up
          </Text>
        </View>
        <View className="flex-row self-center">
          <Text style={{ fontSize: 16 }}>Already have an account? </Text>
          <TouchableOpacity onPress={() => console.log("yes")}>
            <Text style={{ fontSize: 16 }}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="rounded-[25px] py-[10] px-[10] bg-[#F3F2F2] border border-[#DAD8D8] mb-[20]">
        <TextInput
          editable
          numberOfLines={4}
          maxLength={40}
          onChangeText={(text) => onChangeText(text)}
          placeholder="Fullname"
          // value={value}
        />
      </View>
      <View className="rounded-[25px] py-[10] px-[10] bg-[#F3F2F2] border border-[#DAD8D8] mb-[112]">
        <TextInput
          editable
          numberOfLines={4}
          maxLength={40}
          onChangeText={(text) => onChangeText(text)}
          placeholder="Email Address"
          // value={value}
        />
      </View>
      <TouchableOpacity
        // onPress={scrollTo}
        className="py-[12] bg-[#7E62F0] w-full rounded-[100px] mt-[10] mb-[27] "
      >
        <Text className="text-white text-center text-[16px] font-bold leading-[150%]">
          Continue
        </Text>
      </TouchableOpacity>
      <View className="flex-row justify-between items-center">
        <SvgLeft />
        <Text className="">or Sign Up with</Text>
        <SvgRight />
      </View>
      <Button
        title="Go back to Home screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
