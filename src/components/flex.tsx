import { Breakpoint } from "@/theme";
import React from "react";

export const ResponsiveRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-row">
      {children}
      <style jsx>{`
        .flex-row {
          display: flex;
          flex-flow: column nowrap;
          align-items: stretch;
        }
        @media screen and (min-width: ${Breakpoint.Mobile}) {
          .flex-row {
            flex-flow: row nowrap;
          }
        }
      `}</style>
    </div>
  );
};
