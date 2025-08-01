import { StyleSheet } from "@react-pdf/renderer";

// Create styles
export const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    padding: 60,
  },
  genralInfoSection: {
    margin: 10,
    padding: 5,
    border: "2px solid black",
    paddingVertical: 0,
  },
  genralInfoSectionColumnOne: {
    paddingVertical: 5,
    flex: 1,
  },
  genralInfoSectionColumnTwo: {
    borderLeft: "2px solid black",
    padding: 5,
    flex: 1,
  },
  genralInfoText: {
    fontSize: 12,
    marginBottom: 6,
  },
  genralInfoTextColumnTwo: {
    fontSize: 12,
    marginBottom: 6,
    width: 65,
  },
  genralInfoTextColumnTwoTextContainer: {
    flexDirection: "row",
  },
  bullet: {
    width: 15,
    alignSelf: "flex-start",
    position: "relative",
    top: -5,
  },

  tableContainer: {
    border: "1px solid black",
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flex: 1,
    height: "auto",
  },
  tableData: {
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    flex: 1,
    fontSize: 8,
    paddingHorizontal: 12,
    justifyContent: "center",
  },
  serialColumn: {
    maxWidth: 60,
    textAlign: "right",
    paddingHorizontal: 6,
  },
  heading: {
    borderBottom: 1,
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
