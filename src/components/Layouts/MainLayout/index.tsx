import { Sidebar } from "../../Content/Sidebar";

interface ILayoutProps extends React.PropsWithChildren {}

export const MainLayout: React.FC<ILayoutProps> = ({
  children,
}): JSX.Element => {
  return (
    <div className="flex font-yekan">
      <div className="w-1/4 flex h-screen sticky top-0">
        <Sidebar />
      </div>
      <div className="w-3/4 shadow-container wrap-container ">{children}</div>
    </div>
  );
};
