import { Text, View } from "@react-pdf/renderer";
import React from "react";

export const MultiTableRow = ({ title, value }) => {
  return (
    <View
      style={{
        borderRight: "1px solid black",
        flexDirection: "row",
      }}
    >
      <Text
        style={{
          borderRight: "1px solid black",
          borderBottom: "1px solid black",
          fontSize: 8,
          paddingHorizontal: 12,
          flex: 1,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          borderBottom: "1px solid black",
          fontSize: 8,
          paddingHorizontal: 12,
          flex: 1,
        }}
      >
        {value}
      </Text>
    </View>
  );
};
