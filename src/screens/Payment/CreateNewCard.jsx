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
import FontText from "../../../reuseable/FontText";
import BackArrow from "../../../assets/icons/back_arrow.svg";
import CalendarIcon from "../../../assets/icons/calendar_icon.svg";

export default function CreateNewCard({ navigation }) {
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
              Create a New Card
            </FontText>
          </View>
          <View className="w-1/6"></View>
        </View>
      </View>
      <View className="pt-[20px] pb-[30px]">
        <View className="flex">
          <View className="">
            <FontText className="font-chillaxSemibold text-[17px] leading-[24px] mb-[10] text-[#595959]">
              Card Name
            </FontText>
            <View className="rounded-[10px] py-[14] px-[14] bg-[#DAD8D8]/20 border border-[#DAD8D8]">
              <TextInput
                className="text-[17px]"
                editable
                numberOfLines={4}
                maxLength={40}
                onChangeText={(text) => onChangeText(text)}
                placeholder="John Doe"
                // value={value}
              />
            </View>
          </View>
          <View className="mt-[30]">
            <FontText className="font-chillaxSemibold text-[17px] leading-[24px] mb-[10] text-[#595959]">
              Card Number
            </FontText>
            <View className="rounded-[10px] py-[14] px-[14] bg-[#DAD8D8]/20 border border-[#DAD8D8]">
              <TextInput
                className="text-[17px]"
                editable
                numberOfLines={4}
                maxLength={40}
                onChangeText={(text) => onChangeText(text)}
                placeholder="XXXX-XXXX-XXXX-XXXX"
                // value={value}
              />
            </View>
          </View>
          <View className="mt-[30]">
            <FontText className="font-chillaxSemibold text-[17px] leading-[24px] mb-[10] text-[#595959]">
              Expiry Date
            </FontText>
            <View className="w-1/2 rounded-[10px] py-[14] px-[14] bg-[#DAD8D8]/20 border border-[#DAD8D8]">
              <TextInput
                className="text-[17px]"
                editable
                numberOfLines={4}
                maxLength={40}
                onChangeText={(text) => onChangeText(text)}
                placeholder="John Doe"
                // value={value}
              />
              <Pressable onPress={() => navigation.goBack()}>
                <CalendarIcon
                  width={26}
                  height={26}
                  strokeWidth={1}
                  stroke="#595959"
                />
              </Pressable>
            </View>
          </View>
          <View className="mt-[30]">
            <FontText className="font-chillaxSemibold text-[17px] leading-[24px] mb-[10] text-[#595959]">
              CVV
            </FontText>
            <View className="w-1/2 rounded-[10px] py-[14] px-[14] bg-[#DAD8D8]/20 border border-[#DAD8D8]">
              <TextInput
                className="text-[17px]"
                editable
                numberOfLines={4}
                maxLength={40}
                onChangeText={(text) => onChangeText(text)}
                placeholder="John Doe"
                // value={value}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {}}
            className="py-[12] bg-[#7E62F0] w-full rounded-[100px] mt-[10] mb-[27] "
          >
            <FontText className="text-white text-center text-[18px] font-chillaxMedium leading-[150%]">
              Create
            </FontText>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
