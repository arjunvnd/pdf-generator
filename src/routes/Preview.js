import { PDFViewer } from "@react-pdf/renderer";
import { SampleReport } from "../components/SampleReport";
import { useBanksFormOne } from "../context/BanksFormOne";

export const Preview = () => {
  const { form } = useBanksFormOne();

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
        <SampleReport form={form} />
      </PDFViewer>
    </div>
  );
};
