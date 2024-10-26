import React from "react";
import { BorderedSection } from "../../components/BoderedSection";
import { GeneralInfoText } from "../../components/GeneralInfoText";
import { BulletPoint } from "../../components/BulletPoint";
import { Page, Text, View } from "@react-pdf/renderer";
import { styles } from "../../styles";

export const PageOne = () => {
  return (
    <Page size="A4" style={styles.page}>
      <BorderedSection
        style={{
          flexDirection: "row",
        }}
      >
        <View style={styles.genralInfoSectionColumnOne}>
          <GeneralInfoText>Lorem ipsum dolor sit.</GeneralInfoText>
          <GeneralInfoText>Lorem ipsum dolor sit.</GeneralInfoText>
          <GeneralInfoText>Lorem ipsum dolor sit.</GeneralInfoText>
        </View>
        <View style={styles.genralInfoSectionColumnTwo}>
          <View style={styles.genralInfoTextColumnTwoTextContainer}>
            <Text style={styles.genralInfoTextColumnTwo}>Lorem No.</Text>
            <Text style={styles.genralInfoText}>: 500</Text>
          </View>

          <View style={styles.genralInfoTextColumnTwoTextContainer}>
            <GeneralInfoText style={styles.genralInfoTextColumnTwo}>
              Date
            </GeneralInfoText>
            <GeneralInfoText>: 100</GeneralInfoText>
          </View>

          <View style={styles.genralInfoTextColumnTwoTextContainer}>
            <GeneralInfoText style={styles.genralInfoTextColumnTwo}>
              Index
            </GeneralInfoText>
            <GeneralInfoText>: 100</GeneralInfoText>
          </View>

          <View style={styles.genralInfoTextColumnTwoTextContainer}>
            <GeneralInfoText style={styles.genralInfoTextColumnTwo}>
              Sub Index
            </GeneralInfoText>
            <GeneralInfoText>: 100</GeneralInfoText>
          </View>
        </View>
      </BorderedSection>
      <BorderedSection>
        <GeneralInfoText>
          Sub : Lorem ipsum dolor sit amet. Lorem
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            sequi?
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            sequi?
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            sequi?
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
