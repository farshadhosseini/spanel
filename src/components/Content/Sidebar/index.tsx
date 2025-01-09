import {
  faCloudUpload,
  faCog,
  faCoins,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../Common/Form/Button/Navigation";
import { Text } from "../../Common/Form/Text";
import { Profile } from "../Profile";

export const Sidebar: React.FC = (): JSX.Element => {
  return (
    <div className="shadow-container wrap-container overflow-auto bg-gradient-to-r from-blue-600 to-indigo-700 flex-1 text-white">
      <div className="flex flex-col h-full justify-between">
        <div className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="font-extrabold text-4xl">شاتل سرویس</h2>
            <Profile />
            <Text placeholder="جستجوی سرویس ..." type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <Button text="حساب کاربری" icon={faUser} isAcive={true} />
            <Button text="افزایش اعتبار" icon={faCoins} />
            <Button text="سرویس‌های من " icon={faCloudUpload} />
            <Button text="تنظیمات" icon={faCog} />
          </div>
        </div>
        <Button
          text="خروج"
          icon={faSignOut}
          classes="bg-orange-500 hover:bg-orange-600"
        />
      </div>
    </div>
  );
};
