import { useSelector } from "react-redux";
import { ILayoutProps } from "../../../interfaces/components";
import { Sidebar } from "../../Content/Sidebar";
import { RootState } from "../../../app/store";

export const MainLayout: React.FC<ILayoutProps> = ({
  children,
}): JSX.Element => {
  const { toggle } = useSelector((state: RootState) => state.menu)

  return (
    <div className="flex font-yekan">
      {toggle ? <div className="w-full fixed h-dvh z-50">
        <Sidebar />
      </div> : <div className="w-1/4 lg:flex hidden h-screen sticky top-0">
        <Sidebar />
      </div>}
      <div className="lg:w-3/4 w-full flex flex-col">{children}</div>
    </div>
  );
};
