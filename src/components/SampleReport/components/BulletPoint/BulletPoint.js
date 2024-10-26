import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "../../styles";

export const BulletPoint = () => {
  return (
    <View style={styles.bullet}>
      <Text>{"\u2022" + " "}</Text>
    </View>
  );
};
