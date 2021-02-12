import { NextPage } from "next";
import React from "react";

import { Heading } from "@/components/heading";
import { SocialRow } from "@/components/social";
import { PageLayout } from "@/layout/page";
import { Color, TextSize } from "@/theme";

const AboutPage: NextPage = () => {
  return (
    <PageLayout pageTitle={null}>
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
