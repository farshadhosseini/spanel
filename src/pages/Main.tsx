import { List } from "../components/Content/List";
import { PageOptions } from "../components/Features/Paginate/PageOptions";
import { Pages } from "../components/Features/Paginate/Pages";
import { MainLayout } from "../components/Layouts/MainLayout";

export const Main: React.FC = (): JSX.Element => {
  return (
    <MainLayout>
        <PageOptions />
        <List />
        <Pages />
    </MainLayout>
  );
};
