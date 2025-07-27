import { Page, Text, View } from "@react-pdf/renderer";
import React from "react";
import { styles } from "../../styles";
import { SimpleTableRow } from "../../components/SimpleTableRow";
import { MultiTableRow } from "../../components/MultiTableRow";
// ...existing code...

export const PageTwo = ({
  customerName = "",
  constitution = "",
  bankingArrangement = "",
  consortiumLeaderBank = "",
  contactTelephone = "",
  mobilePhone = "",
  email = "",
  address = "",
  adverseObservations = "",
  facilitiesPermitted = "",
  purposeOfFacilities = "",
  sanctionAmount = "",
  lastSanctionDate = "",
  loanAccountNumber = "",
  amountDisbursed = "",
  siteAddress = "",
  geoCoordinates = "",
  preSanctionVisitDate = "",
  propertyBoundaries = {},
}) => {
  return (
    <Page size="LETTER" style={styles.page}>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text style={[styles.heading, { marginBottom: 12 }]}>Annexure I</Text>
        <Text style={[styles.heading, { marginBottom: 12 }]}>
          Default Bank Branch
        </Text>
        <Text style={[styles.heading, { marginBottom: 12 }]}>
          Unit/Post Sanction Visit Report
        </Text>
      </View>

      <View style={[styles.tableContainer, { borderBottom: 0 }]}>
        <SimpleTableRow
          serialNumber={1}
          rowName="NAME OF THE CUSTOMER"
          rowValue={customerName}
        />
        <SimpleTableRow
          serialNumber={2}
          rowName="CONSTITUTION"
          rowValue={constitution}
        />
        <SimpleTableRow
          serialNumber={3}
          rowName="BANKING ARRANGEMENT"
          rowValue={bankingArrangement}
        />
        <SimpleTableRow
          serialNumber={4}
          rowName="IF CONSORTIUM, LEADER BANK"
          rowValue={consortiumLeaderBank}
        />
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
            <Text style={styles.tableData}>TELEPHONE: {contactTelephone}</Text>
            <Text style={styles.tableData}>MOBILE PHONE: {mobilePhone}</Text>
            <Text style={styles.tableData}>E-MAIL ADDRESS: {email}</Text>
          </View>
        </View>
        <SimpleTableRow
          serialNumber={6}
          rowName="ADDRESS OF REGISTERED OFFICE/WORK PLACE OF THE CUSTOMER"
          rowValue={address}
        />
        <SimpleTableRow
          serialNumber={7}
          rowName="ANY ADVERSE OBSERVATIONS REPORTED DURING PRE SANCTION /LAST VISIT"
          rowValue={adverseObservations}
        />
        <SimpleTableRow
          serialNumber={8}
          rowName="FACILITY(IES) PERMITTED"
          rowValue={facilitiesPermitted}
        />
        <SimpleTableRow
          serialNumber={9}
          rowName="PURPOSE OF FACILITIES"
          rowValue={purposeOfFacilities}
        />
        <SimpleTableRow
          serialNumber={10}
          rowName="SANCTION AMOUNT"
          rowValue={sanctionAmount}
        />
        <SimpleTableRow
          serialNumber={11}
          rowName="DATE OF LAST SANCTION"
          rowValue={lastSanctionDate}
        />
        <SimpleTableRow
          serialNumber={12}
          rowName="LOAN ACCOUNT NUMBER"
          rowValue={loanAccountNumber}
        />
        <SimpleTableRow
          serialNumber={13}
          rowName="AMOUNT DISBURSED SO FAR"
          rowValue={amountDisbursed}
        />

        <View style={styles.row}>
          <Text style={[styles.tableData, styles.serialColumn]}>14</Text>
          <View
            style={{
              flex: 1,
            }}
          >
            <MultiTableRow
              title="ADDRESS OF SITE / UNIT VISITED"
              value={siteAddress}
            />
            <MultiTableRow
              title="GEO CO-ORDINATES OF THE SITE/UNIT"
              value={geoCoordinates}
            />
          </View>
        </View>
        <SimpleTableRow
          serialNumber={15}
          rowName="DATE OF PRE SANCTION/LAST VISIT "
          rowValue={preSanctionVisitDate}
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
                fontSize: 12,
                flexDirection: "row",
              }}
            >
              <Text
                style={{ flexGrow: 1, flexBasis: "33%", fontSize: 8 }}
              ></Text>
              <Text style={{ flexGrow: 1, flexBasis: "33%", fontSize: 8 }}>
                AS PER SALE DEED
              </Text>
              <Text style={{ flexGrow: 1, flexBasis: "33%", fontSize: 8 }}>
                ACTUALS
              </Text>
            </View>
            <View style={{ fontSize: 8, flexDirection: "row" }}>
              <Text style={{ flex: 1 }}>EAST</Text>
              <Text style={{ flex: 1 }}>{propertyBoundaries.east || ""}</Text>
              <Text style={{ flex: 1 }}>{propertyBoundaries.east || ""}</Text>
            </View>
            <View style={{ fontSize: 8, flexDirection: "row" }}>
              <Text style={{ flex: 1 }}>WEST</Text>
              <Text style={{ flex: 1 }}>{propertyBoundaries.west || ""}</Text>
              <Text style={{ flex: 1 }}>{propertyBoundaries.west || ""}</Text>
            </View>
            <View style={{ fontSize: 8, flexDirection: "row" }}>
              <Text style={{ flex: 1 }}>NORTH</Text>
              <Text style={{ flex: 1 }}>{propertyBoundaries.north || ""}</Text>
              <Text style={{ flex: 1 }}>{propertyBoundaries.north || ""}</Text>
            </View>
            <View style={{ fontSize: 8, flexDirection: "row" }}>
              <Text style={{ flex: 1 }}>SOUTH</Text>
              <Text style={{ flex: 1 }}>{propertyBoundaries.south || ""}</Text>
              <Text style={{ flex: 1 }}>{propertyBoundaries.south || ""}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Middle section starts */}
      <View style={[styles.tableContainer, { marginTop: 36, borderBottom: 0 }]}>
        <View style={styles.row}>
          <View style={[styles.tableData, { alignItems: "center" }]}>
            <Text style={[styles.heading, { fontSize: 8 }]}>
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
            <Text style={[styles.heading, { fontSize: 8 }]}>
              MSME/CORPORATE /AGRI LOANS
            </Text>
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
