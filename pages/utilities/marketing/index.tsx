import type { ReactElement } from "react";
import FullLayout from "../../../src/layouts/full/FullLayout";

const marketingPage = () => {
    return <h1> ini page marketing</h1>
}

export default marketingPage;
marketingPage.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};