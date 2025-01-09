import sample from "../../../../assets/images/sample.png";
import { DropDown } from "../../../Common/DropDown";

export const Item: React.FC = (): JSX.Element => {
  return (
    <div className="relative mb-3 p-4 shadow-card rounded-lg flex flex-col md:flex-row items-center md:items-start gap-4">
      <img src={sample} alt="post-image" className="w-36 h-36" />
      <div className="flex flex-col gap-3 md:items-start items-center">
        <h2 className="text-xl font-extrabold">تیتر سرویس</h2>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis tempora
          perspiciatis placeat odio dolore, nemo dignissimos voluptate a
          mollitia repudiandae porro optio quod nostrum ut ullam similique
          pariatur eveniet maiores.
        </p>
      </div>
      <DropDown />
    </div>
  );
};
