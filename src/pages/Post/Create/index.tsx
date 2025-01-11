import { NewPost } from "../../../components/Content/Post/Create";
import { PageOptions } from "../../../components/Features/PageOptions";
import { MainLayout } from "../../../components/Layouts/MainLayout";

export const Post: React.FC = (): JSX.Element => {
    return (
        <MainLayout>
            <PageOptions title="سرویس جدید" toggleMenu={() => { }} />
            <NewPost />
        </MainLayout>
    );
};
