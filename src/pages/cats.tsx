import { NextPage } from "next";
import Image from "next/image";

import { ResponsiveRow } from "@/components/flex";
import { Heading } from "@/components/heading";
import { BodyText } from "@/components/text";
import { PageLayout } from "@/layout/page";

const CatsPage: NextPage = () => {
  return (
    <PageLayout pageTitle={"Cats"}>
      <ResponsiveRow>
        <figure>
          <CatImage src={"/images/sylvia.jpg"} alt="Sylvia the cat" />
          <figcaption className={"caption"}>
            <Heading level={"h2"}>Sylvia DePrato</Heading>
            <BodyText>
              <p>
                I adopted Sylvia in September of 2017. She was a TNR (trap,
                neuter/spay, and release) so she has a clipped ear. Sylvia (aka
                &ldquo;miss ma'am&rdquo;) is a graceful and loud baby.
              </p>
            </BodyText>
          </figcaption>
        </figure>
        <figure>
          <CatImage src={"/images/walter.jpg"} alt="Walter the cat" />
          <figcaption className={"caption"}>
            <Heading level={"h2"}>Walter DePrato</Heading>
            <BodyText>
              <p>
                I adopted Walter as a kitten in October of 2018. He has grown
                from a smol babby to a chonky boi. His favorite activites
                include knocking over plants, laying on my chest, and being a
                complete gremlin.
              </p>
            </BodyText>
          </figcaption>
        </figure>
      </ResponsiveRow>
      <style jsx>{`
        figure {
          flex: 1;
          padding: 1rem;

          display: flex;
          flex-flow: column nowrap;
          align-items: center;
        }
        .caption {
          display: flex;
          flex-flow: column;
          align-items: center;
          padding: 1rem;
        }
      `}</style>
    </PageLayout>
  );
};

export default CatsPage;

const CatImage = ({ alt, src }: { alt: string; src: string }) => {
  return (
    <Image src={src} layout={"intrinsic"} height={500} width={500} alt={alt} />
  );
};
