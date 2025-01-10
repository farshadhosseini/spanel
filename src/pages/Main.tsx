import { Modal } from "../components/Common/Modal";
import { List } from "../components/Content/List";
import { PageOptions } from "../components/Features/PageOptions";
import { Paginate } from "../components/Features/Paginate";
import { MainLayout } from "../components/Layouts/MainLayout";

export const Main: React.FC = (): JSX.Element => {
  return (
    <MainLayout>
        <PageOptions toggleMenu={() => {}} />
        <List />
        <Paginate />
    </MainLayout>
  );
};
