import { Nav } from "../components/nav";

export interface BaseLayoutProps {
  children: React.ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className={"root"}>
      <div className={"nav"}>
        <Nav />
      </div>
      {children}
      <style jsx>{`
        .root {
          display: flex;
          flex-flow: row nowrap;
          min-height: 100vh;
          padding: 4rem 0;
        }
      `}</style>
    </div>
  );
};
