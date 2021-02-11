import React from "react";
import { TextSize } from "@/theme";
import { Font } from "../../theme/Font";

type HeadingLevel = `h${1 | 2 | 3 | 4}`;

export interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  level: HeadingLevel;
  size?: TextSize;
}

export const Heading = ({ level: Elt, children, size }: HeadingProps) => {
  return (
    <>
      <Elt className={"heading"}>{children}</Elt>
      <style jsx>
        {`
          .heading {
            font-family: ${Font.Heading};
            font-weight: bold;
          }

          h1 {
            font-size: ${TextSize.T400};
            padding: 1rem 0;
          }
          h2& {
            font-size: ${TextSize.T300};
            padding: 0.75rem 0;
          }
          h3& {
            font-size: ${TextSize.T200};
            padding: 0.5rem 0;
          }
          h4& {
            font-size: ${TextSize.T100};
            padding: 0.25rem 0;
          }
        `}
      </style>

      <style jsx>{`
        .heading {
          font-size: ${size};
        }
      `}</style>
    </>
  );
};
