import { Heading } from "@/components/heading";
import { SocialRow } from "@/components/social";
import { PageLayout } from "@/layout/page";
import { Color, TextSize } from "@/theme";
import { NextPage } from "next";
import React from "react";

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
      <Heading level={"h2"} size={TextSize.T300}>
        Cat dad, ethical technology enthusiast, and all-around gay nerd.
      </Heading>
      <SocialRow />
    </PageLayout>
  );
};

export default AboutPage;
