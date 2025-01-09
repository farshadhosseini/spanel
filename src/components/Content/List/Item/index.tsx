import sample from "../../../../assets/images/sample.png";
import { Button } from "../../../Common/Form/Button/Buy";

export const Item: React.FC = (): JSX.Element => {
  return <div className="mb-3 p-4 shadow-card rounded-lg flex gap-4">
    <img src={sample} alt="post-image" className="w-36 h-36"/>
    <div className="flex flex-col gap-2">
        <h2 className="text-xl font-extrabold">تیتر سرویس</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis tempora perspiciatis placeat odio dolore, nemo dignissimos voluptate a mollitia repudiandae porro optio quod nostrum ut ullam similique pariatur eveniet maiores.</p>
        <Button/>
    </div>
  </div>;
};
