import {
  faCloudUpload,
  faCog,
  faCoins,
  faSignOut,
  faSpaceShuttle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../Common/Form/Button";
import { Text } from "../../Common/Form/Text";
import { Profile } from "../Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Sidebar: React.FC = (): JSX.Element => {
  return (
    <div className="shadow-container wrap-container bg-gradient-to-r from-blue-700 to-indigo-700 flex-1 text-white">
      <div className="flex h-full justify-between flex-col">
        <div className="space-y-8">
          <div className="space-y-3 text-center">
            <FontAwesomeIcon icon={faSpaceShuttle} rotation={270} size="2xl" />
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
        <Button text="خروج" icon={faSignOut} />
      </div>
    </div>
  );
};
