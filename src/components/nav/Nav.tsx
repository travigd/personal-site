import Link from "next/link";
import * as React from "react";
import { Font } from "../../theme/Font";
import { TextSize } from "@/theme";
import { Color } from "../../theme/Color";

export const Nav = () => {
  return (
    <ul className={"root"}>
      <NavItem href={"/"}>about</NavItem>
      <NavItem href={"/posts"}>blog</NavItem>
      <style jsx>{`
        .root {
          list-style: none;
          width: 8rem;
          display: flex;
          flex-flow: column nowrap;
          align-items: flex-end;
        }
      `}</style>
    </ul>
  );
};

const NavItem = (p: { href: string; children: React.ReactNode }) => {
  return (
    <>
      <li>
        <Link href={p.href}>
          <a>{p.children}</a>
        </Link>
      </li>
      <style jsx>{`
        a {
          display: block;
          font-family: ${Font.Heading};
          font-size: ${TextSize.T100};
          padding: 1rem;
        }

        a:hover {
          color: ${Color.Raspberry};
        }
      `}</style>
    </>
  );
};
