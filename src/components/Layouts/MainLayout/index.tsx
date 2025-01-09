import { ILayoutProps } from "../../../interfaces/components";
import { Sidebar } from "../../Content/Sidebar";

export const MainLayout: React.FC<ILayoutProps> = ({
  children,
}): JSX.Element => {
  return (
    <div className="flex font-yekan">
      <div className="fade-header"></div>
      <div className="w-1/4 flex h-screen sticky top-0">
        <Sidebar />
      </div>
      <div className="w-3/4 flex flex-col">{children}</div>
    </div>
  );
};
