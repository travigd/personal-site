import { NextPage } from "next";
import Image from "next/image";

import { PageLayout } from "@/layout/page";

const CatsPage: NextPage = () => {
  return (
    <PageLayout pageTitle={"Cats"}>
      <div className="prose">
        <h1>Cats</h1>
        <h2 className="">Sylvia</h2>
        <CatImage src={"/images/sylvia.jpg"} alt="Sylvia the cat" />

        <p>
          I adopted Sylvia in September of 2017. She was a TNR (trap,
          neuter/spay, and release) so she has a clipped ear. Sylvia (aka
          &ldquo;miss ma'am&rdquo;) is a graceful and loud baby.
        </p>

        <h2>Walter</h2>
        <CatImage src={"/images/walter.jpg"} alt="Walter the cat" />

        <p>
          I adopted Walter as a kitten in October of 2018. He has grown from a
          smol babby to a chonky boi. His favorite activites include knocking
          over plants, laying on my chest, and being a complete gremlin.
        </p>
      </div>
    </PageLayout>
  );
};

export default CatsPage;

const CatImage = ({ alt, src }: { alt: string; src: string }) => {
  return (
    <Image src={src} layout={"intrinsic"} height={500} width={500} alt={alt} />
  );
};
