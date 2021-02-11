import { NextPage } from "next";
import { PageLayout } from "@/layout/page";
import { SocialRow } from "../components/social";
import { Heading } from "../components/heading";
import React from "react";
import { TextSize } from "@/theme";
import { Color } from "../theme/Color";

const AboutPage: NextPage = () => {
  return (
    <PageLayout>
      <Heading level={"h1"} size={TextSize.T500}>
        The homepage of <span className={"name"}>Travis DePrato</span>.
        <style jsx>{`
          .name {
            color: ${Color.Raspberry};
          }
        `}</style>
      </Heading>
      <SocialRow />
    </PageLayout>
  );
};

export default AboutPage;
