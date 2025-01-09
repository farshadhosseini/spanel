import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PageOptions: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="fade-header z-20"></div>
      <div className="wrap-container z-20 sticky top-4 shadow-container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="bg-orange-300 w-4 h-4 rounded-md animate-pulse"
            id="indicator"
          ></span>
          <h3>سرویس‌های من</h3>
        </div>
        <div className="flex gap-3 items-center bg-slate-600 text-white py-2 px-3 rounded-md">
          <p className="text-sm"> فرشاد حسینی</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </>
  );
};
