import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid2,
  Box,
  TextField,
  Typography,
  Paper,
  Button,
} from "@mui/material";

import { useBanksFormOne } from "../../context/BanksFormOne";
import { initialState } from "../../context/BanksFormOne";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { SampleReport } from "../SampleReport";
export default function UserInput() {
  const { form, updateForm } = useBanksFormOne();
  const navigate = useNavigate();
  const handleClear = () => {
    Object.keys(initialState).forEach((key) => {
      if (key === "propertyBoundaries") {
        Object.keys(initialState.propertyBoundaries).forEach((subKey) => {
          updateForm(
            `propertyBoundaries.${subKey}`,
            initialState.propertyBoundaries[subKey]
          );
        });
      } else {
        updateForm(key, initialState[key]);
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateForm(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form values:", form);
    navigate("/preview");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Customer Details
        </Typography>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Name of the Customer"
              name="customerName"
              value={form.customerName}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Constitution"
              name="constitution"
              value={form.constitution}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Banking Arrangement"
              name="bankingArrangement"
              value={form.bankingArrangement}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <TextField
              label="If Consortium, Leader Bank"
              name="consortiumLeaderBank"
              value={form.consortiumLeaderBank}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <TextField
              label="Telephone"
              name="contactTelephone"
              value={form.contactTelephone}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <TextField
              label="MOBILE PHONE"
              name="mobilePhone"
              value={form.mobilePhone}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <TextField
              label="E-MAIL ADDRESS"
              name="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              label="Address of Registered Office/Work Place"
              name="address"
              value={form.address}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              label="Any Adverse Observations (Pre/Last Visit)"
              name="adverseObservations"
              value={form.adverseObservations}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Facility(ies) Permitted"
              name="facilitiesPermitted"
              value={form.facilitiesPermitted}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Purpose of Facilities"
              name="purposeOfFacilities"
              value={form.purposeOfFacilities}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <TextField
              label="Sanction Amount"
              name="sanctionAmount"
              value={form.sanctionAmount}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
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
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <TextField
              label="Loan Account Number"
              name="loanAccountNumber"
              value={form.loanAccountNumber}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
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
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Address of Site / Unit Visited"
              name="siteAddress"
              value={form.siteAddress}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Geo Co-ordinates of the Site/Unit"
              name="geoCoordinates"
              value={form.geoCoordinates}
              onChange={handleChange}
              fullWidth
              onClick={async () => {
                if (!form.geoCoordinates) {
                  if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                      (position) => {
                        const coords = `${position.coords.latitude}, ${position.coords.longitude}`;
                        updateForm("geoCoordinates", coords);
                      },
                      (error) => {
                        alert("Unable to retrieve location: " + error.message);
                      }
                    );
                  } else {
                    alert("Geolocation is not supported by your browser.");
                  }
                }
              }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
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
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <TextField
              label="East"
              name="propertyBoundaries.east"
              value={form.propertyBoundaries.east}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <TextField
              label="West"
              name="propertyBoundaries.west"
              value={form.propertyBoundaries.west}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <TextField
              label="North"
              name="propertyBoundaries.north"
              value={form.propertyBoundaries.north}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <TextField
              label="South"
              name="propertyBoundaries.south"
              value={form.propertyBoundaries.south}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <TextField
              label="As Per Sale Deed"
              name="propertyBoundaries.asPerSaleDeed"
              value={form.propertyBoundaries.asPerSaleDeed}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
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
          <Grid2 size={{ xs: 12 }}>
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
          <Grid2 size={{ xs: 12 }}>
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
          <Grid2 size={{ xs: 12 }}>
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
          <Grid2 size={{ xs: 12 }}>
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

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: 2,
          pb: 2,
          gap: 2,
        }}
      >
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Capture Values
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleClear}>
          Clear Form
        </Button>
        {/* <Button variant="outlined" color="secondary" onClick={handleClear}> */}
        <PDFDownloadLink
          document={<SampleReport form={form} />}
          fileName="somename.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
        {/* </Button> */}
      </Box>
    </Box>
  );
}
