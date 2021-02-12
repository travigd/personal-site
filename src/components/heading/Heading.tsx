import React from "react";
import { Font, TextSize } from "@/theme";

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
            // Padding is a function of font-size (not actually sure if that's
            // a good thing... ope)
            padding: 0.5em 0;
          }

          h1 {
            font-size: ${TextSize.T400};
          }
          h2& {
            font-size: ${TextSize.T300};
          }
          h3& {
            font-size: ${TextSize.T200};
          }
          h4& {
            font-size: ${TextSize.T100};
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
