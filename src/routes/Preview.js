import { PDFViewer } from "@react-pdf/renderer";
import { SampleReport } from "../components/SampleReport";

export const Preview = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <PDFViewer
        style={{
          width: "100%",
        }}
      >
        <SampleReport />
      </PDFViewer>
    </div>
  );
};
