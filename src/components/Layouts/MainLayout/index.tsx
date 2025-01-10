import { ILayoutProps } from "../../../interfaces/components";
import { Sidebar } from "../../Content/Sidebar";

export const MainLayout: React.FC<ILayoutProps> = ({
  children,
}): JSX.Element => {
  return (
    <div className="flex font-yekan">
      <div className="w-1/4 lg:flex hidden h-screen sticky top-0">
        <Sidebar />
      </div>
      <div className="lg:w-3/4 w-full flex flex-col">{children}</div>
    </div>
  );
};
