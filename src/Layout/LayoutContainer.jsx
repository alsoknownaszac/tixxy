import React, { useEffect, useState } from "react";
import { StatusBar, View, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function LayoutContainer({
  className,
  children,
  noSafeAreaProfile,
}) {
  const insets = useSafeAreaInsets();

  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        flex: 1,
        width,
        backgroundColor: "#fff",
        justifyContent: "flex-start",
        paddingTop: !noSafeAreaProfile ? insets.top + 20 : 0,
        paddingBottom: insets.bottom,
        paddingLeft: !noSafeAreaProfile ? insets.left + 20 : 0,
        paddingRight: !noSafeAreaProfile ? insets.right + 20 : 0,
      }}
      className={className}
    >
      <StatusBar animated={true} barStyle="default" />
      {children}
    </View>
  );
}
