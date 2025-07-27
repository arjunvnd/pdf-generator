import React from "react";
import { Document } from "@react-pdf/renderer";
import { PageOne } from "./Pages/PageOne";
import { PageTwo } from "./Pages/PageTwo/PageTwo";
import { PageThree } from "./Pages/PageThree";

// Create Document Component
export const SampleReport = ({ form }) => {
  return (
    <Document>
      <PageOne />
      <PageTwo {...form} />
      <PageThree />
    </Document>
  );
};
