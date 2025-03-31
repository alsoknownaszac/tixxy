import React, { useState } from "react";
import { Pressable, View, TouchableOpacity } from "react-native";
import FontText from "../../../../reuseable/FontText";
import { useNavigation } from "@react-navigation/native";

export default function GuestListSection({ item, index }) {
  // const navigation = useNavigation();

  // const [openList, setOpenList] = useState(false);
  // const [activeKey] = useState(item.key - 1);

  return (
    <View>
      <View className="flex flex-row gap-2">
        <View className="px-[16px] py-[8px] h-[32px] rounded-[100px] bg-[#7E62F0] flex flex-row items-center">
          <FontText className="font-chillaxMedium text-[12px] text-[#FFFFFF] leading-[16px]">
            All (30)
          </FontText>
        </View>
        <View className="px-[16px] py-[8px] h-[32px] rounded-[100px] bg-[#EBEBEB] flex flex-row items-center">
          <FontText className="font-chillaxMedium text-[12px] text-[#595959] leading-[16px]">
            Vip (10)
          </FontText>
        </View>
        <View className="px-[16px] py-[8px] h-[32px] rounded-[100px] bg-[#EBEBEB] flex flex-row items-center">
          <FontText className="font-chillaxMedium text-[12px] text-[#595959] leading-[16px]">
            VVip (10)
          </FontText>
        </View>
      </View>
      <View className="mt-[24px]">
        <AlphabetFlatList
          renderItem={this.renderItem}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          data={names}
          getItemLayout={this.getItemLayout}
          mainFlatListContainerStyle={{ flex: 1 }}
          alphabetListProps={{
            selectedAlphabetTextStyle: {
              color: "#fff",
            },
            alphabetButtonStyle: {
              backgroundColor: "#fff",
            },
            selectedAlphabetButtonStyle: {
              backgroundColor: "orange",
              height: 30,
              width: 30,
              borderRadius: 15,
              shadowOpacity: 0.5,
              shadowOffset: { width: 2, height: 2 },
              elevation: 4,
            },
            alphabetButtonStyle: {
              backgroundColor: "#fff",
              height: 30,
              width: 30,
              borderRadius: 15,
              shadowOpacity: 0.5,
              shadowOffset: { width: 2, height: 2 },
              elevation: 4,
            },
            alphabetListContainerStyle: {
              flex: 0.2,
            },
            showsVerticalScrollIndicator: false,
          }}
        />
      </View>
    </View>
  );
}
