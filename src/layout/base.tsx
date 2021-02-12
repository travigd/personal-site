import { Breakpoint } from "@/theme";
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
    <div className={"root"}>
      <Head>
        <title>
          {pageTitle && appendSiteTitle
            ? `${pageTitle} | ${site.title}`
            : pageTitle || site.title}
        </title>
      </Head>
      <div className={"nav"}>
        <Nav />
      </div>
      {children}
      <style jsx>{`
        .root {
          min-height: 100vh;
          padding: 4rem 0;
          display: flex;
          flex-flow: column nowrap;
        }

        @media only screen and (min-width: ${Breakpoint.Mobile}) {
          .root {
            flex-flow: row nowrap;
          }
        }
      `}</style>
    </div>
  );
};
