import { Text, View } from "@react-pdf/renderer";
import React from "react";
import { styles } from "../../styles";

export const SimpleTableRow = ({ serialNumber, rowName, rowValue }) => {
  return (
    <View style={styles.row}>
      <Text style={[styles.tableData, styles.serialColumn]}>
        {serialNumber}
      </Text>
      <Text style={styles.tableData}>{rowName}</Text>
      <Text style={styles.tableData}>{rowValue}</Text>
    </View>
  );
};
