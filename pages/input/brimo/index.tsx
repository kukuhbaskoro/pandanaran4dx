import type { ReactElement } from 'react';
import { Typography } from '@mui/material';
import PageContainer from '../../../src/components/container/PageContainer';
import DashboardCard from '../../../src/components/shared/DashboardCard';
import FullLayout from '../../../src/layouts/full/FullLayout';

const Brimo = () => {
    return (
        <PageContainer title='Brimo' description='This is Brimo page'>
            <DashboardCard title='Brimo'>
                <Typography>ini adalah halaman Perolehan Brimo</Typography>
            </DashboardCard>
        </PageContainer>
    );
};

export default Brimo;
Brimo.getLayout = function getLayout(page: ReactElement) {
    return <FullLayout>{page}</FullLayout>
};