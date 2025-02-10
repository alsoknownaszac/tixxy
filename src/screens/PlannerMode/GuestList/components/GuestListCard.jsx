import React, { useState } from "react";
import { Pressable, View } from "react-native";
import FontText from "../../../../reuseable/FontText";

export default function GuestListCard({ navigation, item, index }) {
  const [openList, setOpenList] = useState(false);
  const [activeKey] = useState(item.key - 1);

  //   console.log(activeKey);

  return (
    <Pressable
      onPress={() => {
        activeKey == index && setOpenList(!openList);
      }}
    >
      <View className="border-2 border-[#F3F2F2] mt-[16px] rounded-[20px] ">
        <View className="p-[20px] flex flex-row items-center justify-center">
          <View className="flex flex-row items-center gap-2">
            {/* {item.icon} */}
            <FontText className="font-trapMedium text-[16px] text-[#2A2B2A] leading-[20px]">
              {item.title}
            </FontText>
          </View>
        </View>
        {openList && activeKey == index && (
          <View className="h-[1.5px] bg-[#DAD8D8] w-4/5 mx-auto" />
        )}

        {openList && activeKey == index && (
          <View className="p-[20px] px-[12px]">
            <FontText className="font-chillaxRegular text-[14px] text-[#595959] leading-[20px]">
              To share a link with your guest, you need to create a form
              questionnaire that includes the details of your quests that you
              need, for example their names, phone numbers etc. thereafter you
              share the link to the people you want present, and they fill the
              form to get their details saved.
            </FontText>
          </View>
        )}
      </View>
    </Pressable>
  );
}
