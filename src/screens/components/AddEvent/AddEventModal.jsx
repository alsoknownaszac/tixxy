import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Image,
  Text,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import TicketDetailsCard from "../../../reuseable/TicketDetailsCard";
import FontText from "../../../reuseable/FontText";
import CalendarIconII from "../../../../assets/icons/calendar_icon_2.svg";

export default function AddEventModal({
  detailsData,
  modalVisible,
  setModalVisible,
}) {
  const item = {
    uri: detailsData.image_uri,
  };

  return (
    <Modal
      theme={{
        colors: {
          backdrop: "rgba(190, 27, 27, 0.7)",
        },
      }}
      animationType="slide"
      transparent={true}
      presentationStyle="overFullScreen"
      statusBarTranslucent={true}
      visible={modalVisible}
      // onRequestClose={() => {
      //   Alert.alert("Modal has been closed.");
      //   setModalVisible(!modalVisible);
      // }}
    >
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.centeredView}
      >
        <View style={styles.modalView1}>
          <View className="bg-white py-[23] px-[27] rounded-b-[6px]">
            <View className="flex flex-row justify-between items-center">
              <View className="w-1/3">
                <FontText className="mb-[5px] text-[14px] leading-[19.6px] font-chillaxMedium">
                  Date
                </FontText>
                <View className="backdrop-blur-xl flex flex-row">
                  <CalendarIconII
                    width={16}
                    height={16}
                    strokeWidth={0.3}
                    stroke="#000"
                  />
                  <FontText className="font-satoshiMedium text-[16px] leading-[20px] pl-1">
                    May 21
                  </FontText>
                </View>
              </View>
              <View className="w-1/3">
                <FontText className="mb-[5px] text-[14px] leading-[19.6px] font-chillaxMedium">
                  Date
                </FontText>
                <View className="backdrop-blur-xl flex flex-row">
                  <CalendarIconII
                    width={16}
                    height={16}
                    strokeWidth={0.3}
                    stroke="#000"
                  />
                  <FontText className="font-satoshiMedium text-[16px] leading-[20px] pl-1">
                    May 21
                  </FontText>
                </View>
              </View>
            </View>
            <TicketDetailsCard
              item={item}
              setLoaded={detailsData.setLoaded}
              imageWidth={detailsData.imageWidth}
            />
          </View>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "black",
  },
  centeredView: {
    flex: 1,
    height: 256,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    // padding: 20,
  },
  modalView1: {
    width: "100%",
    marginTop: "auto",
  },
  modalView2: {
    margin: 20,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
