import React, { createContext, useContext, useState } from "react";

export const initialState = {
  customerName: "",
  constitution: "",
  bankingArrangement: "",
  consortiumLeaderBank: "",
  contactTelephone: "",
  mobilePhone: "",
  email: "",
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

const BanksFormOneContext = createContext();

export const BanksFormOneProvider = ({ children }) => {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState(null);

  // Custom setter with error handling
  console.log("This is it");
  const updateForm = (field, value) => {
    try {
      if (field.startsWith("propertyBoundaries.")) {
        const key = field.split(".")[1];
        setForm((prev) => ({
          ...prev,
          propertyBoundaries: { ...prev.propertyBoundaries, [key]: value },
        }));
      } else {
        setForm((prev) => ({ ...prev, [field]: value }));
      }
      setError(null);
    } catch (e) {
      setError(e.message || "Unknown error");
    }
  };

  return (
    <BanksFormOneContext.Provider value={{ form, updateForm, error }}>
      {children}
    </BanksFormOneContext.Provider>
  );
};

export const useBanksFormOne = () => {
  const context = useContext(BanksFormOneContext);
  console.log("context", context);
  if (!context) {
    throw new Error(
      "useBanksFormOne must be used within a BanksFormOneProvider"
    );
  }
  return context;
};
