import React from "react";
import { BaseLayout } from "./base";

export interface StoryLayoutProps {
  children: React.ReactNode;
}

export const StoryLayout = ({ children }: StoryLayoutProps) => {
  return (
    <BaseLayout>
      <main>{children}</main>
      <style jsx>{`
        main {
          padding: 1rem;
        }
      `}</style>
    </BaseLayout>
  );
};
