import React from "react";
import { BorderedSection } from "../../components/BoderedSection";
import { GeneralInfoText } from "../../components/GeneralInfoText";
import { BulletPoint } from "../../components/BulletPoint";
import { Page, Text, View } from "@react-pdf/renderer";
import { styles } from "../../styles";

const today = () => {
  const d = new Date();
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};

export const PageOne = () => {
  return (
    <Page size="LETTER" style={styles.page}>
      <BorderedSection
        style={{
          flexDirection: "row",
        }}
      >
        <View style={styles.genralInfoSectionColumnOne}>
          <GeneralInfoText>CREDIT POLICY SECTION</GeneralInfoText>
          <GeneralInfoText>RISK MANAGEMENT WING</GeneralInfoText>
          <GeneralInfoText>HEAD OFFICE :BENGALURU-560002</GeneralInfoText>
        </View>
        <View style={styles.genralInfoSectionColumnTwo}>
          <View style={styles.genralInfoTextColumnTwoTextContainer}>
            <Text style={styles.genralInfoTextColumnTwo}>IG No.</Text>
            <Text style={styles.genralInfoText}>: IC/606/2024</Text>
          </View>

          <View style={styles.genralInfoTextColumnTwoTextContainer}>
            <GeneralInfoText style={styles.genralInfoTextColumnTwo}>
              Date
            </GeneralInfoText>
            <GeneralInfoText>: {today()}</GeneralInfoText>
          </View>

          <View style={styles.genralInfoTextColumnTwoTextContainer}>
            <GeneralInfoText style={styles.genralInfoTextColumnTwo}>
              Index
            </GeneralInfoText>
            <GeneralInfoText>: Advances</GeneralInfoText>
          </View>

          <View style={styles.genralInfoTextColumnTwoTextContainer}>
            <GeneralInfoText style={styles.genralInfoTextColumnTwo}>
              Sub Index
            </GeneralInfoText>
            <GeneralInfoText>: General</GeneralInfoText>
          </View>
        </View>
      </BorderedSection>
      <BorderedSection>
        <GeneralInfoText>
          SUB: ADOPTION OF UNIFORM FORMAT FOR DOCUMENTING UNIT/ POST SANCTION
          VISITS
        </GeneralInfoText>
      </BorderedSection>
      <BorderedSection>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <GeneralInfoText>Lorem</GeneralInfoText>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <BulletPoint />
          <GeneralInfoText
            style={{
              flex: 1,
            }}
          >
            Branches / Offices shall use the format for documenting unit /post
            sanction visits for the loans granted across all segments viz.
            Retail, MSME, Agriculture, Corporate.
          </GeneralInfoText>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <BulletPoint />
          <GeneralInfoText
            style={{
              flex: 1,
            }}
          >
            Branches / Offices shall note that the format will not supersede any
            existing formats.
          </GeneralInfoText>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <BulletPoint />
          <GeneralInfoText
            style={{
              flex: 1,
            }}
          >
            Photographs of visit to be annexed with the Visit report
          </GeneralInfoText>
        </View>
      </BorderedSection>

      <BorderedSection>
        <GeneralInfoText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          ipsa quidem tempora qui quam vitae amet. Ut totam enim earum animi
          voluptates, quos beatae natus eum. Voluptas saepe hic quia.
        </GeneralInfoText>
        <GeneralInfoText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          ipsa quidem tempora qui quam vitae amet. Ut totam enim earum animi
          voluptates, quos beatae natus eum. Voluptas saepe hic quia.
        </GeneralInfoText>
        <GeneralInfoText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          ipsa quidem tempora qui quam vitae amet. Ut totam enim earum animi
          voluptates, quos beatae natus eum. Voluptas saepe hic quia.
        </GeneralInfoText>
        <GeneralInfoText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          ipsa quidem tempora qui quam vitae amet. Ut totam enim earum animi
          voluptates, quos beatae natus eum. Voluptas saepe hic quia.
        </GeneralInfoText>
        <GeneralInfoText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          ipsa quidem tempora qui quam vitae amet. Ut totam enim earum animi
          voluptates, quos beatae natus eum. Voluptas saepe hic quia.
        </GeneralInfoText>
        <GeneralInfoText>
          For convenience of Branches/Offices an editable copy of the format can
          be downloaded from the following link- Cannet&gt;Wing Details{">"}RM
          Wing&gt;Downloads.
        </GeneralInfoText>
        <GeneralInfoText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          ipsa quidem tempora qui quam vitae amet. Ut totam enim earum animi
          voluptates, quos beatae natus eum. Voluptas saepe hic quia.
        </GeneralInfoText>
      </BorderedSection>
    </Page>
  );
};
