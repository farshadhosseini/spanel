
import { IPost } from "../../../../../interfaces/posts";

export const ItemBody: React.FC<IPost> = ({ id, userId, title, body }): JSX.Element => {
  return (
    <div className="flex flex-col gap-3 lg:items-start items-center">
      <h2 className="text-xl font-extrabold">{title}</h2>
      <p className="text-justify">
        {body}
      </p>
      <div className="flex gap-2 text-sm">
        <span className="bg-orange-100 px-4 py-1 rounded-full">User_ID : {userId}</span>
        <span className="bg-orange-100 px-4 py-1 rounded-full">Post_ID : {id}</span>
      </div>
    </div>
  );
};
