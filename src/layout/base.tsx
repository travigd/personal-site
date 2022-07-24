import Head from "next/head";
import React from "react";

import { Nav } from "@/components/nav";
import site from "@/config/site.json";

export interface BaseLayoutProps {
  children: React.ReactNode;
  pageTitle: string | null;
  appendSiteTitle?: boolean;
}

export const BaseLayout = ({
  children,
  pageTitle,
  appendSiteTitle = true,
}: BaseLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row md:p-16 gap-4 mx-auto justify-center">
      <Head>
        <title>
          {pageTitle && appendSiteTitle
            ? `${pageTitle} | ${site.title}`
            : pageTitle || site.title}
        </title>
      </Head>
      <div>
        <Nav />
      </div>
      <div
        // min-width: 0 is required to prevent flex children from expanding
        // past the width allowed by their parent container. The reason for
        // this is with flexbox, `auto` is calculated as the "ideal" width of
        // the child (i.e., how wide the child would be if unconstrained).
        // Interestingly, this only seems to manifest on Safari.
        className="min-w-0"
      >
        {children}
      </div>
    </div>
  );
};
