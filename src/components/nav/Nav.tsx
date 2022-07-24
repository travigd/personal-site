import clsx from "clsx";
import Link from "next/link";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

import { UnstyledButton } from "../button";

export const Nav = () => {
  // When in mobile mode, whether or not the menu is active
  const [open, setOpen] = React.useState(false);
  const toggleOpen = React.useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    setOpen((open) => !open);
  }, []);

  return (
    <nav className="md:h-full md:border-r-2 md:border-r-indigo-100">
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
    <div className="text-[2rem] p-4 md:hidden">
      <UnstyledButton onClick={toggleOpen} aria-label={"toggle navigation"}>
        <FontAwesomeIcon className={`icon`} icon={faBars} role={"button"} />
      </UnstyledButton>
    </div>
  );
};

const NavMenu = ({ open }: { open: boolean }) => {
  return (
    <ul
      className={clsx(open ? "flex" : "hidden", "md:flex", "flex-col md:w-32")}
    >
      <NavItem href={"/"}>travisty</NavItem>
      <NavItem href={"/cats"}>cats</NavItem>
      <NavItem href={"/posts"}>posts</NavItem>
    </ul>
  );
};

const NavItem = (p: { href: string; children: React.ReactNode }) => {
  return (
    <>
      <li>
        <Link href={p.href}>
          <a className="block md:text-right font-medium p-4 text-indigo-800 hover:text-indigo-900 transition-colors hover:bg-indigo-50">
            {p.children}
          </a>
        </Link>
      </li>
    </>
  );
};
