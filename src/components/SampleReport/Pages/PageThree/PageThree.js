import { Page, Text, View } from "@react-pdf/renderer";
import React from "react";
import { styles } from "../../styles";
import { SimpleTableRow } from "../../components/SimpleTableRow";

export const PageThree = () => {
  return (
    <Page size="LETTER" style={styles.page}>
      <View style={[styles.tableContainer, { marginTop: 36, borderBottom: 0 }]}>
        <View style={styles.row}>
          <View style={[styles.tableData, { alignItems: "center" }]}>
            <Text style={styles.heading}>
              COMMON VERIFICATION FOR ALL TYPE OF LOANS
            </Text>
          </View>
        </View>
        <SimpleTableRow
          serialNumber={19}
          rowName="COMMON VERIFICATION FOR ALL TYPE OF LOANS"
          rowValue="(SPECIFIC COMMENTS ON AVAILIBILITY OF POWER, LABOUR, STATUTORY APPROVALS, BOOKS OF ACCOUNTS, STOCK MOVEMENT REGISTER, AVAILABLITY OF HYPOTHECATION BOARD, ELECTRICITY BILLS INCLUDING VARIATION IN USAGE OF POWER, etc. SHALL BE GIVEN)"
        />
      </View>
    </Page>
  );
};
