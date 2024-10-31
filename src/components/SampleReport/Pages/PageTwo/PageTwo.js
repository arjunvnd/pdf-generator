import { Page, Text, View } from "@react-pdf/renderer";
import React from "react";
import { styles } from "../../styles";
import { SimpleTableRow } from "../../components/SimpleTableRow";
import { MultiTableRow } from "../../components/MultiTableRow";

export const PageTwo = () => {
  return (
    <Page size="A4" style={styles.page}>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text style={styles.heading}>Annexure I</Text>
        <Text style={styles.heading}>Default Bank Branch</Text>
        <Text style={styles.heading}>Unit/Post Sanction Visit Report</Text>
      </View>

      <View style={[styles.tableContainer, { borderBottom: 0 }]}>
        <SimpleTableRow serialNumber={1} rowName="NAME OF THE CUSTOMER" />
        <SimpleTableRow serialNumber={2} rowName="CONSTITUTION" />
        <SimpleTableRow serialNumber={3} rowName="BANKING ARRANGEMENT" />
        <SimpleTableRow serialNumber={4} rowName="IF CONSORTIUM, LEADER BANK" />
        <View style={styles.row}>
          <Text
            style={[styles.tableData, styles.serialColumn, { height: 14 * 3 }]}
          >
            5
          </Text>
          <View style={[styles.tableData, { paddingHorizontal: 0 }]}>
            <Text
              // debug
              style={{
                paddingHorizontal: 12,
              }}
            >
              CONTACT DETAILS
            </Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.tableData}>TELEPHONE</Text>
            <Text style={styles.tableData}>TELEPHONE1</Text>
            <Text style={styles.tableData}>TELEPHONE</Text>
          </View>
        </View>
        <SimpleTableRow
          serialNumber={6}
          rowName="ADDRESS OF REGISTERED OFFICE/WORK PLACE OF THE CUSTOMER"
        />
        <SimpleTableRow
          serialNumber={7}
          rowName="ANY ADVERSE OBSERVATIONS REPORTED DURING PRE SANCTION /LAST VISIT"
        />
        <SimpleTableRow serialNumber={8} rowName="FACILITY(IES) PERMITTED" />
        <SimpleTableRow serialNumber={9} rowName="PURPOSE OF FACILITIES" />
        <SimpleTableRow serialNumber={10} rowName="SANCTION AMOUNT" />
        <SimpleTableRow serialNumber={11} rowName="DATE OF LAST SANCTION" />
        <SimpleTableRow serialNumber={12} rowName="LOAN ACCOUNT NUMBER" />
        <SimpleTableRow serialNumber={13} rowName="AMOUNT DISBURSED SO FAR" />

        <View style={styles.row}>
          <Text style={[styles.tableData, styles.serialColumn]}>14</Text>
          <View
            style={{
              flex: 1,
            }}
          >
            <MultiTableRow title="ADDRESS OF SITE / UNIT VISITED" />
            <MultiTableRow title="GEO CO-ORDINATES OF THE SITE/UNIT" />
          </View>
        </View>
        <SimpleTableRow
          serialNumber={15}
          rowName="DATE OF PRE SANCTION/LAST VISIT "
        />

        <View style={styles.row}>
          <Text style={[styles.tableData, styles.serialColumn]}>16</Text>
          <Text style={styles.tableData}>
            IN CASE OF IMMOVABLE PROPERTY, BOUNDARIES OF PROPERTY
          </Text>
          <View
            style={{
              flex: 1,
              borderBottom: "1px solid black",
              borderRight: "1px solid black",
              paddingHorizontal: 12,
            }}
          >
            <View
              style={{
                // flex: 1,
                fontSize: 12,
                flexDirection: "row",
              }}
            >
              <Text
                style={{ flexGrow: 1, flexBasis: "33%", fontSize: 12 }}
              ></Text>
              <Text style={{ flexGrow: 1, flexBasis: "33%", fontSize: 12 }}>
                AS PER SALE DEED
              </Text>
              <Text style={{ flexGrow: 1, flexBasis: "33%", fontSize: 12 }}>
                ACTUALS
              </Text>
            </View>
            <View
              style={{
                // flex: 1,
                fontSize: 12,
                flexDirection: "row",
              }}
            >
              <Text style={{ flex: 1 }}>EAST</Text>
              <Text style={{ flex: 1 }}></Text>
              <Text style={{ flex: 1 }}></Text>
            </View>
            <View
              style={{
                fontSize: 12,
                flexDirection: "row",
              }}
            >
              <Text style={{ flex: 1 }}>West</Text>
              <Text style={{ flex: 1 }}></Text>
              <Text style={{ flex: 1 }}></Text>
            </View>
            <View
              style={{
                fontSize: 12,
                flexDirection: "row",
              }}
            >
              <Text style={{ flex: 1 }}>North</Text>
              <Text style={{ flex: 1 }}></Text>
              <Text style={{ flex: 1 }}></Text>
            </View>
            <View
              style={{
                fontSize: 12,
                flexDirection: "row",
              }}
            >
              <Text style={{ flex: 1 }}>South</Text>
              <Text style={{ flex: 1 }}></Text>
              <Text style={{ flex: 1 }}></Text>
            </View>
          </View>
        </View>
      </View>

      {/* Middle section starts */}
      <View style={[styles.tableContainer, { marginTop: 36, borderBottom: 0 }]}>
        <View style={styles.row}>
          <View style={[styles.tableData, { alignItems: "center" }]}>
            <Text style={styles.heading}>
              FOR RETAIL LOANS (HOUSING, VEHICLE, MORTGAGE, CANARA RENT ETC.)
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={[styles.tableData, styles.serialColumn]}>17</Text>
          <View
            style={{
              flex: 1,
            }}
          >
            <MultiTableRow
              title={`COMMENTS ON OPERATIONS OF THE BORROWER \n\n(SPECIFIC COMMENTS ON AVAILIBILITY OF POWER, LABOUR, STATUTORY APPROVALS, BOOKS OF ACCOUNTS, STOCK MOVEMENT REGISTER, AVAILABLITY OF HYPOTHECATION BOARD, ELECTRICITY BILLS INCLUDING VARIATION IN USAGE OF POWER, etc. SHALL BE GIVEN)`}
            />
            <MultiTableRow
              title={`COMMENTS ON OPERATIONS OF THE BORROWER \n\nVERIFICATION OF ASSET OWNERSHIP (VERIFICATION OF VEHICLE RC, OWNERSHIP FROM TITLE DEED ETC. SHALL BE PROVIDED, BANK’S LIEN/HYPOTHECATION WITH REGISTRATION AUTHORITIES SHALL BE CONFIRMED)`}
            />
          </View>
        </View>
      </View>

      {/* Middle section end */}

      {/* Bottom section Starts */}

      <View style={[styles.tableContainer, { marginTop: 36, borderBottom: 0 }]}>
        <View style={styles.row}>
          <View style={[styles.tableData, { alignItems: "center" }]}>
            <Text style={styles.heading}>MSME/CORPORATE /AGRI LOANS</Text>
          </View>
        </View>
        <SimpleTableRow
          serialNumber={18}
          rowName="COMMENTS ON OPERATIONS OF THE BORROWER"
          rowValue="(SPECIFIC COMMENTS ON AVAILIBILITY OF POWER, LABOUR, STATUTORY APPROVALS, BOOKS OF ACCOUNTS, STOCK MOVEMENT REGISTER, AVAILABLITY OF HYPOTHECATION BOARD, ELECTRICITY BILLS INCLUDING VARIATION IN USAGE OF POWER, etc. SHALL BE GIVEN)"
        />
      </View>
      {/* Bottom section end */}
    </Page>
  );
};
