import React, { Fragment } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
// import AlphabetFlatList from "react-native-alphabet-flat-list";

const items = [...new Array(10)].map((i, index) => ({
  id: index,
  avatar: "https://avatars0.githubusercontent.com/u/22367929?s=40&v=4",
  name: index.toString(),
}));

const data = {
  A: items,
  B: items,
  C: items,
  D: items,
  E: items,
  F: items,
  G: items,
  H: items,
  I: items,
  J: items,
  K: items,
  l: items,
  M: items,
  N: items,
  O: items,
  P: items,
  Q: items,
  R: items,
  S: items,
  T: items,
  U: items,
  V: items,
  W: items,
  X: items,
  Y: items,
  Z: items,
};

const HEADER_HEIGHT = 50;
const CONTACT_ITEM_HEIGHT = 60;

export default function ListOfGuest() {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      {/* <AlphabetFlatList
        data={data}
        itemHeight={CONTACT_ITEM_HEIGHT}
        headerHeight={HEADER_HEIGHT}
        renderItem={ContactItem}
        ListHeaderComponent={
          <View
            style={{
              height: HEADER_HEIGHT,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>ListHeaderComponent</Text>
          </View>
        }
      /> */}
    </Fragment>
  );
}

const ContactItem = function ({ item, last }) {
  return (
    <View
      key={item.id}
      style={[
        styles.container,
        { borderBottomWidth: last ? 0 : StyleSheet.hairlineWidth },
      ]}
    >
      <Image style={styles.avatar} source={{ uri: item.avatar }} />
      <View style={styles.body}>
        <Text style={styles.name}>{`${item.name}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    height: CONTACT_ITEM_HEIGHT,
    padding: 15,
    borderColor: "#E5E5E5",
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  body: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    color: "#333",
  },
});
