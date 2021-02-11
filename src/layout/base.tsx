import Head from "next/head";
import React from "react";

import { Nav } from "@/components/nav";
import site from "@/config/site.json";

export interface BaseLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const BaseLayout = ({ children, title }: BaseLayoutProps) => {
  return (
    <div className={"root"}>
      <Head>
        <title>{`${title} | ${site.title}`}</title>
      </Head>
      <div className={"nav"}>
        <Nav />
      </div>
      {children}
      <style jsx>{`
        .root {
          display: flex;
          flex-flow: row nowrap;
          min-height: 100vh;
          padding: 4rem 0;
        }
      `}</style>
    </div>
  );
};
