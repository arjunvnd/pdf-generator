import { PDFViewer } from "@react-pdf/renderer";
import { SampleReport } from "./components/SampleReport";

const App = () => (
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

export default App;
