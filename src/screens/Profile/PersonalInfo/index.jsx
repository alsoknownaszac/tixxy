import React from "react";
import LayoutContainer from "../../../Layout/LayoutContainer";
import { FlatList, Image, Pressable, TextInput, View } from "react-native";
import BackArrow from "../../../../assets/icons/back_arrow.svg";
import MoreBtn from "../../../../assets/icons/more_icon.svg";
import UploadImageIcon from "../../../../assets/icons/add_image.svg";
import FontText from "../../../reuseable/FontText";

export default function PersonalInfo({ navigation }) {
  const uri =
    "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg";

  return (
    <LayoutContainer>
      <View className="mb-[10] flex-initial rounded-b-[20px]">
        <View className="py-[20px] flex flex-row justify-between items-center">
          <Pressable onPress={() => navigation.goBack()}>
            <BackArrow
              width={26}
              height={26}
              strokeWidth={1}
              stroke="#9A9898"
            />
          </Pressable>
          <Pressable onPress={() => console.log("hi")}>
            <MoreBtn width={26} height={26} strokeWidth={1} stroke="#9A9898" />
          </Pressable>
        </View>
        <View className="pt-[20px] pb-[24px] flex items-center">
          <View className="w-fit relative">
            <Image
              source={{
                uri: uri,
              }}
              key={uri}
              style={{
                width: 80,
                height: 80,
                borderRadius: "100%",
                resizeMode: "cover",
              }}
              blurRadius={1.2}
              //   onLoad={() => setLoaded(true)}
            />

            <Pressable
              className="absolute bottom-0 -right-1"
              onPress={() => navigation.goBack()}
            >
              <UploadImageIcon
                width={26}
                height={26}
                strokeWidth={1}
                stroke="#FFFFFF"
              />
            </Pressable>
          </View>
        </View>
      </View>

      <View className="flex-1">
        <FlatList
          vertical
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={[
            { label: "Full Name", placeholder: "Jane Doe" },
            { label: "Email", placeholder: "janedoe@gmail.com" },
            { label: "Phone Number", placeholder: "+234 80 1234 5678" },
            { label: "Password", placeholder: "Password character" },
          ]}
          renderItem={({ item, index }) => <PersonalInfoCard {...{ item }} />}
        />
      </View>
    </LayoutContainer>
  );
}

function PersonalInfoCard({ item }) {
  return (
    <View>
      <FontText className="font-chillaxMedium text-[16px] leading-[24px] mb-2">
        {item.label}
      </FontText>
      <View className="rounded-[10px] py-[14] px-[14] bg-[#F7F7F7] border border-[#DAD8D8] mb-[20]">
        <TextInput
          className="text-[16px]"
          editable
          numberOfLines={4}
          maxLength={40}
          onChangeText={(text) => onChangeText(text)}
          placeholder={item.placeholder}
          // value={value}
        />
      </View>
    </View>
  );
}
