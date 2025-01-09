import { faChevronDown, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IPageOptionsProps } from "../../../interfaces/components";

export const PageOptions: React.FC<IPageOptionsProps> = ({
  toggleMenu,
}): JSX.Element => {
  return (
    <>
      <div className="fade-header z-20"></div>
      <div className="wrap-container z-20 sticky top-4 shadow-container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex md:hidden" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faList} size="lg" />
          </span>
          <span
            className="bg-orange-300 w-4 h-4 rounded-md animate-pulse hidden md:flex"
            id="indicator"
          ></span>
          <h3>سرویس‌های من</h3>
        </div>
        <div className="flex gap-3 items-center bg-slate-600 text-white py-2 px-3 rounded-md">
          <p className="text-sm">فرشاد حسینی</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </>
  );
};
