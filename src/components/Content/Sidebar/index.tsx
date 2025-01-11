import {
  faClose,
  faCloudUpload,
  faCog,
  faCoins,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../Common/Form/Button/Navigation";
import { Button as ActionButton } from "../../Common/Form/Button/Action";
import { Profile } from "../Profile";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { setToggle } from "../../../features/menuSlice";
import { Search } from "../../Common/Search";

export const Sidebar: React.FC = (): JSX.Element => {
  const { toggle } = useSelector((state: RootState) => state.menu)
  const dispatch = useDispatch()
  return (
    <div className="wrap-container overflow-auto bg-gradient-to-r from-blue-600 to-indigo-800 flex-1 text-white">
      <div className="flex flex-col gap-2 h-full justify-between">
        {toggle ? <span className="self-end"><FontAwesomeIcon icon={faClose} size="xl" onClick={() => dispatch(setToggle(!toggle))} /></span> : null}
        <div className="space-y-4">
          <div className="text-center flex items-center flex-col gap-1">
            <img src={logo} alt="logo" className="w-32" />
            <h2 className="font-extrabold xl:text-4xl lg:text-2xl">شاتل سرویس</h2>
            <Profile />
          </div>
          <Search />
          <div className="flex flex-col gap-2">
            <Button text="حساب کاربری" icon={faUser} />
            <Button text="افزایش اعتبار" icon={faCoins} />
            <Link to="/">
              <Button text="سرویس‌های من " icon={faCloudUpload} isAcive={true} />
            </Link>
            <Button text="تنظیمات" icon={faCog} />
          </div>
        </div>
        <ActionButton text="خروج" icon={faSignOut} />
      </div>
    </div >
  );
};
