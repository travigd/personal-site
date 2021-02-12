import React from "react";

type Paragraph = React.ReactElement<HTMLParagraphElement>;
export const BodyText = ({
  children,
}: {
  children: Paragraph | Array<Paragraph>;
}) => {
  return (
    <div>
      {children}
      <style jsx>{`
        :global(p) {
          line-height: 1.25em;
          padding: 0.25em 0;
        }
      `}</style>
    </div>
  );
};
