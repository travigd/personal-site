import Link from "next/link";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

import { Breakpoint, Color, Font, TextSize } from "@/theme";
import { UnstyledButton } from "../button";

export const Nav = () => {
  // When in mobile mode, whether or not the menu is active
  const [open, setOpen] = React.useState(false);
  const toggleOpen = React.useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    setOpen((open) => !open);
  }, []);

  return (
    <nav>
      <NavToggle toggleOpen={toggleOpen} />
      <NavMenu open={open} />
    </nav>
  );
};

const NavToggle = ({
  toggleOpen,
}: {
  toggleOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <div className={"root"}>
      <UnstyledButton onClick={toggleOpen} aria-label={"toggle navigation"}>
        <FontAwesomeIcon className={`icon`} icon={faBars} role={"button"} />
      </UnstyledButton>
      <style jsx>{`
        .root {
          font-size: 2rem;
          padding: 1rem;
        }

        @media only screen and (min-width: ${Breakpoint.Mobile}) {
          .root {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

const NavMenu = ({ open }: { open: boolean }) => {
  return (
    <ul className={"nav-list"}>
      <NavItem href={"/"}>about</NavItem>
      <NavItem href={"/cats"}>cats</NavItem>
      <NavItem href={"/posts"}>blog</NavItem>
      <style jsx>{`
        .nav-list {
          list-style: none;
          // Note: open only actually matters when we're in mobile mode
          display: ${open ? "flex" : "none"};
          flex-flow: column nowrap;
        }

        @media only screen and (min-width: ${Breakpoint.Mobile}) {
          .nav-list {
            width: 8rem;
            display: flex;
            align-items: flex-end;
          }
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
