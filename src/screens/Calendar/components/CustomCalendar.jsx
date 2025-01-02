import React from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Pressable, Text, View } from "react-native";

export default function CustomCalendar({ width }) {
  return (
    <Calendar
      // Customize the appearance of the calendar
      style={{
        height: 340,
        width: width - 40,
      }}
      hideArrows={true}
      enableSwipeMonths={true}
      // dayComponent={({ date, state }) => {
      //   return (
      //     <Pressable onClick={() => console.log(state, date)}>
      //       <Text
      //         style={{
      //           textAlign: "center",
      //           color: "red",
      //         }}
      //       >
      //         {date.day}
      //       </Text>
      //     </Pressable>
      //   );
      // }}
      current={"2012-03-01"}
      onDayPress={(day) => {
        console.log("selected day", day);
      }}
      markedDates={{
        "2012-03-01": { selected: true, selectedColor: "blue" },
        "2012-03-02": { marked: true },
        "2012-03-03": { selected: true, selectedColor: "blue" },
      }}
    />
  );
}
