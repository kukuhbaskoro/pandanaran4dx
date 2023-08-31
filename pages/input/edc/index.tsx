import { ReactElement } from "react";
import { Typography } from "@mui/material";
import PageContainer from "../../../src/components/container/PageContainer";
import DashboardCard from "../../../src/components/shared/DashboardCard";
import FullLayout from "../../../src/layouts/full/FullLayout";
import QrisPage from "../qris";

const EdcPage = () => {
    return (
        <PageContainer title="Halaman Edc" description="This is Edc Page">
            <DashboardCard title="Halaman Edc">
                <Typography>Ini adalah Halaman akuisisi Edc</Typography>
            </DashboardCard>
        </PageContainer>
    );
};

export default EdcPage;
EdcPage.getLayout = function getLayout(page: ReactElement) {
    return <FullLayout>{page}</FullLayout>;
};