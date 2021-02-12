import React from "react";
import { BaseLayout, BaseLayoutProps } from "./base";

export interface StoryLayoutProps extends BaseLayoutProps {}

export const StoryLayout = ({ children, ...props }: StoryLayoutProps) => {
  return (
    <BaseLayout {...props}>
      <main>{children}</main>
      <style jsx>{`
        main {
          padding: 1rem;
        }
      `}</style>
    </BaseLayout>
  );
};
