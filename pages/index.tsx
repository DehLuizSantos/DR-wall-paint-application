import type { ReactElement } from "react";
import ApplicationProviders from "../templates/AplicationProviders";

import type { NextPageWithLayout } from "./_app";
import MainPage from "../modules/MainPage";

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <MainPage />
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <ApplicationProviders>{page}</ApplicationProviders>;
};

export default Page;
