import { BodyText } from "@/components/text";
import { NextPage } from "next";
import Image from "next/image";

import { Heading } from "@/components/heading";
import { PageLayout } from "@/layout/page";

const CatsPage: NextPage = () => {
  return (
    <PageLayout pageTitle={"Posts"}>
      <Heading level={"h1"}>Ope &ndash; nothing here yet!</Heading>
      <BodyText>
        <p>Sorry about that.</p>
        <p>Check back soon! I'm doing cool stuff, I promise!</p>
      </BodyText>
    </PageLayout>
  );
};

export default CatsPage;

const CatImage = ({ alt, src }: { alt: string; src: string }) => {
  return (
    <Image src={src} layout={"intrinsic"} height={500} width={500} alt={alt} />
  );
};
