import { Page, Text, View } from "@react-pdf/renderer";
import React from "react";
import { styles } from "../../styles";

export const PageTwo = () => {
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.tableContainer}>
        <View style={styles.row}>
          <Text style={[styles.tableData, styles.serialColumn]}>1</Text>
          <Text style={styles.tableData}>NAME OF THE CUSTOMER</Text>
          <Text style={styles.tableData}></Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.tableData, styles.serialColumn]}>2</Text>
          <Text style={styles.tableData}>CONSTITUTION</Text>
          <Text style={styles.tableData}></Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.tableData, styles.serialColumn]}>3</Text>
          <Text style={styles.tableData}>BANKING ARRANGEMENT</Text>
          <Text style={styles.tableData}>SOLE/MBA/CONSORTIUM </Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.tableData, styles.serialColumn]}>4</Text>
          <Text debug style={styles.tableData}>
            IF CONSORTIUM, LEADER BANK{" "}
          </Text>
          <Text style={styles.tableData}> </Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.tableData, styles.serialColumn]}>5</Text>
          <Text debug style={styles.tableData}>
            CONTACT DETAILS
          </Text>
          <View style={styles.column}>
            {/* <Text style={styles.tableData}></Text>
            <Text style={styles.tableData}></Text>
            <Text style={styles.tableData}></Text> */}
          </View>
        </View>
      </View>
    </Page>
  );
};
