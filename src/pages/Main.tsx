import { List } from "../components/Content/List";
import { PageOptions } from "../components/Features/PageOptions";
import { MainLayout } from "../components/Layouts/MainLayout";

export const Main: React.FC = (): JSX.Element => {
  return (
      <MainLayout>
        <PageOptions title="سرویس‌های من" />
        <List />
      </MainLayout>
  );
};
