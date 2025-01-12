import { general } from "../../../constants/config";
import { IPaginateProps } from "../../../interfaces/components";

export const Paginate: React.FC<IPaginateProps> = ({ page, changePage }): JSX.Element => {
  return <div className="flex gap-1">
    {Array.from({ length: Math.ceil(general.total_post / general.per_page) }, (_, i) => i + 1).map(i => (
      <button
        key={i}
        className={`px-4 py-2 rounded-lg ${page === i ? 'bg-blue-500 text-white' : 'bg-slate-200'} `}
        onClick={() => changePage(i)}
      >
        {i}
      </button>
    ))}
  </div>;
};
