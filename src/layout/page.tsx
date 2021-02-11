import React from "react";
import { AtRule } from "csstype";
import { BaseLayout } from "./base";

export interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <BaseLayout>
      <main>{children}</main>
      <style jsx>{`
        main {
          padding: 1rem;
          margin: auto 0;
        }
      `}</style>
    </BaseLayout>
  );
};
