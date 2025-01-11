import { faList, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IPageOptionsProps } from "../../../interfaces/components";
import { Link } from "react-router-dom";
import { RootState } from "../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { setToggle } from "../../../features/menuSlice";

export const PageOptions: React.FC<IPageOptionsProps> = ({
  title,
}): JSX.Element => {
  const { toggle } = useSelector((state: RootState) => state.menu)
  const dispatch = useDispatch();

  return (
    <>
      <div className="fade-header z-20"></div>
      <div className="wrap-container z-20 sticky top-4 shadow-container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex lg:hidden" onClick={() => dispatch(setToggle(!toggle))} >
            <FontAwesomeIcon icon={faList} size="lg" />
          </span>
          <span
            className="bg-orange-300 w-4 h-4 rounded-md animate-pulse hidden lg:flex"
            id="indicator"
          ></span>
          <h3>{title}</h3>
        </div>
        <div className="flex gap-2 text-sm font-light">
          <Link to="/services/new">
            <div className="flex gap-3 items-center bg-orange-500 text-white py-2 px-3 rounded-md cursor-pointer">
              سرویس جدید
            </div>
          </Link>
          <div className="flex gap-3 items-center bg-slate-600 text-white py-2 px-3 rounded-md cursor-pointer">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
    </>
  );
};
