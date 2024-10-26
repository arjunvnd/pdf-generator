import React from "react";
import { Document } from "@react-pdf/renderer";
import { PageOne } from "./Pages/PageOne";
import { PageTwo } from "./Pages/PageTwo/PageTwo";

// Create Document Component
export const SampleReport = () => (
  <Document>
    <PageOne />
    <PageTwo />
  </Document>
);
