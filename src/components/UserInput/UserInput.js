import React, { useState } from "react";
import {
  Grid2,
  Box,
  TextField,
  Typography,
  Paper,
  Button,
} from "@mui/material";

const initialState = {
  customerName: "",
  constitution: "",
  bankingArrangement: "",
  consortiumLeaderBank: "",
  contactTelephone: "",
  contactTelephone1: "",
  contactTelephone2: "",
  address: "",
  adverseObservations: "",
  facilitiesPermitted: "",
  purposeOfFacilities: "",
  sanctionAmount: "",
  lastSanctionDate: "",
  loanAccountNumber: "",
  amountDisbursed: "",
  siteAddress: "",
  geoCoordinates: "",
  preSanctionVisitDate: "",
  propertyBoundaries: {
    east: "",
    west: "",
    north: "",
    south: "",
    asPerSaleDeed: "",
    actuals: "",
  },
  retailComments: "",
  retailAssetVerification: "",
  msmeComments: "",
  commonVerification: "",
};

export default function UserInput() {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("propertyBoundaries.")) {
      const key = name.split(".")[1];
      setForm((prev) => ({
        ...prev,
        propertyBoundaries: { ...prev.propertyBoundaries, [key]: value },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with any action (API, state, etc.)
    console.log("Form values:", form);
    alert("Form values captured! Check the console for details.");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Customer Details
        </Typography>
        <Grid2 container spacing={2}>
          <Grid2 xs={12} sm={6}>
            <TextField
              label="Name of the Customer"
              name="customerName"
              value={form.customerName}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 xs={12} sm={6}>
            <TextField
              label="Constitution"
              name="constitution"
              value={form.constitution}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 xs={12} sm={6}>
            <TextField
              label="Banking Arrangement"
              name="bankingArrangement"
              value={form.bankingArrangement}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 xs={12} sm={6}>
            <TextField
              label="If Consortium, Leader Bank"
              name="consortiumLeaderBank"
              value={form.consortiumLeaderBank}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 xs={12} sm={4}>
            <TextField
              label="Telephone"
              name="contactTelephone"
              value={form.contactTelephone}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 xs={12} sm={4}>
            <TextField
              label="Telephone 1"
              name="contactTelephone1"
              value={form.contactTelephone1}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 xs={12} sm={4}>
            <TextField
              label="Telephone 2"
              name="contactTelephone2"
              value={form.contactTelephone2}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 xs={12}>
            <TextField
              label="Address of Registered Office/Work Place"
              name="address"
              value={form.address}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 xs={12}>
            <TextField
              label="Any Adverse Observations (Pre/Last Visit)"
              name="adverseObservations"
              value={form.adverseObservations}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 xs={12} sm={6}>
            <TextField
              label="Facility(ies) Permitted"
              name="facilitiesPermitted"
              value={form.facilitiesPermitted}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 xs={12} sm={6}>
            <TextField
              label="Purpose of Facilities"
              name="purposeOfFacilities"
              value={form.purposeOfFacilities}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 xs={12} sm={4}>
            <TextField
              label="Sanction Amount"
              name="sanctionAmount"
              value={form.sanctionAmount}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 xs={12} sm={4}>
            <TextField
              label="Date of Last Sanction"
              name="lastSanctionDate"
              value={form.lastSanctionDate}
              onChange={handleChange}
              fullWidth
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          </Grid2>
          <Grid2 xs={12} sm={4}>
            <TextField
              label="Loan Account Number"
              name="loanAccountNumber"
              value={form.loanAccountNumber}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 xs={12} sm={6}>
            <TextField
              label="Amount Disbursed So Far"
              name="amountDisbursed"
              value={form.amountDisbursed}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
        </Grid2>
      </Paper>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Site Details
        </Typography>
        <Grid2 container spacing={2}>
          <Grid2 xs={12} sm={6}>
            <TextField
              label="Address of Site / Unit Visited"
              name="siteAddress"
              value={form.siteAddress}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 xs={12} sm={6}>
            <TextField
              label="Geo Co-ordinates of the Site/Unit"
              name="geoCoordinates"
              value={form.geoCoordinates}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 xs={12} sm={6}>
            <TextField
              label="Date of Pre Sanction/Last Visit"
              name="preSanctionVisitDate"
              value={form.preSanctionVisitDate}
              onChange={handleChange}
              fullWidth
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          </Grid2>
        </Grid2>
      </Paper>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Property Boundaries (Immovable Property)
        </Typography>
        <Grid2 container spacing={2}>
          <Grid2 xs={12} sm={4}>
            <TextField
              label="East"
              name="propertyBoundaries.east"
              value={form.propertyBoundaries.east}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 xs={12} sm={4}>
            <TextField
              label="West"
              name="propertyBoundaries.west"
              value={form.propertyBoundaries.west}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 xs={12} sm={4}>
            <TextField
              label="North"
              name="propertyBoundaries.north"
              value={form.propertyBoundaries.north}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 xs={12} sm={4}>
            <TextField
              label="South"
              name="propertyBoundaries.south"
              value={form.propertyBoundaries.south}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 xs={12} sm={4}>
            <TextField
              label="As Per Sale Deed"
              name="propertyBoundaries.asPerSaleDeed"
              value={form.propertyBoundaries.asPerSaleDeed}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 xs={12} sm={4}>
            <TextField
              label="Actuals"
              name="propertyBoundaries.actuals"
              value={form.propertyBoundaries.actuals}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
        </Grid2>
      </Paper>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Retail Loans (Housing, Vehicle, Mortgage, etc.)
        </Typography>
        <Grid2 container spacing={2}>
          <Grid2 xs={12}>
            <TextField
              label="Comments on Operations of the Borrower"
              name="retailComments"
              value={form.retailComments}
              onChange={handleChange}
              fullWidth
              multiline
              minRows={2}
            />
          </Grid2>
          <Grid2 xs={12}>
            <TextField
              label="Verification of Asset Ownership"
              name="retailAssetVerification"
              value={form.retailAssetVerification}
              onChange={handleChange}
              fullWidth
              multiline
              minRows={2}
            />
          </Grid2>
        </Grid2>
      </Paper>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          MSME/Corporate/Agri Loans
        </Typography>
        <Grid2 container spacing={2}>
          <Grid2 xs={12}>
            <TextField
              label="Comments on Operations of the Borrower"
              name="msmeComments"
              value={form.msmeComments}
              onChange={handleChange}
              fullWidth
              multiline
              minRows={2}
            />
          </Grid2>
        </Grid2>
      </Paper>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Common Verification for All Types of Loans
        </Typography>
        <Grid2 container spacing={2}>
          <Grid2 xs={12}>
            <TextField
              label="Common Verification"
              name="commonVerification"
              value={form.commonVerification}
              onChange={handleChange}
              fullWidth
              multiline
              minRows={2}
            />
          </Grid2>
        </Grid2>
      </Paper>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Capture Values
        </Button>
      </Box>
    </Box>
  );
}
