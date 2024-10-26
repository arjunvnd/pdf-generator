import { Text } from "@react-pdf/renderer";
import React from "react";
import { styles } from "../../styles";

export const GeneralInfoText = ({ children, style = {}, ...props }) => {
  return (
    <Text {...props} style={[styles.genralInfoText, style]}>
      {children}
    </Text>
  );
};
