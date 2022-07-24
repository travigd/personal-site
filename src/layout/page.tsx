import React from "react";
import { BaseLayout, BaseLayoutProps } from "./base";

export interface PageLayoutProps extends BaseLayoutProps {}

export const PageLayout = ({ children, ...rest }: PageLayoutProps) => {
  return (
    <BaseLayout {...rest}>
      <main className="px-4 max-w-3xl">{children}</main>
    </BaseLayout>
  );
};
