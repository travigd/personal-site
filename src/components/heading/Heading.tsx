import React from "react";
import { Font, TextSize } from "@/theme";
import css from "styled-jsx/css";

type HeadingLevel = `h${1 | 2 | 3 | 4}`;

export interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  level: HeadingLevel;
  size?: TextSize;
}

export const Heading = ({ level: Elt, children, size }: HeadingProps) => {
  const custom = !!size
    ? css.resolve`
        .heading {
          font-size: ${size};
        }
      `
    : null;
  return (
    <>
      <Elt className={`heading ${custom?.className || ""}`}>{children}</Elt>
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
          h2 {
            font-size: ${TextSize.T300};
          }
          h3 {
            font-size: ${TextSize.T200};
          }
          h4 {
            font-size: ${TextSize.T100};
          }
        `}
      </style>
      {custom?.styles}
    </>
  );
};
