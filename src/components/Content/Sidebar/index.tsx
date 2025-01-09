import {
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

export const Sidebar: React.FC = (): JSX.Element => {
  return (
    <div className="wrap-container overflow-auto bg-gradient-to-r from-blue-600 to-indigo-800 flex-1 text-white">
      <div className="flex flex-col gap-2 h-full justify-between">
        <div className="space-y-4">
          <div className="text-center flex items-center flex-col gap-1">
            <img src={logo} alt="logo" className="w-32" />
            <h2 className="font-extrabold text-4xl">شاتل سرویس</h2>
            <Profile />
          </div>
          <div className="flex flex-col gap-2">
            <Button text="حساب کاربری" icon={faUser} />
            <Button text="افزایش اعتبار" icon={faCoins} />
            <Button text="سرویس‌های من " icon={faCloudUpload} isAcive={true} />
            <Button text="تنظیمات" icon={faCog} />
          </div>
        </div>
        <ActionButton text="خروج" icon={faSignOut} />
      </div>
    </div>
  );
};
