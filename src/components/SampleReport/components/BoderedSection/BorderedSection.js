import { View } from "@react-pdf/renderer";
import React from "react";
import { styles } from "../../styles";

export const BorderedSection = ({ children, style = {} }) => {
  return <View style={[styles.genralInfoSection, style]}>{children}</View>;
};
