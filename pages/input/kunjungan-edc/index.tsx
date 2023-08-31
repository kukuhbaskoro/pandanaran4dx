import type { ReactElement } from 'react';
import { Typography } from '@mui/material';
import PageContainer from '../../../src/components/container/PageContainer';
import DashboardCard from '../../../src/components/shared/DashboardCard';
import FullLayout from '../../../src/layouts/full/FullLayout';

const VisitEdc = () => {
    return (
        <PageContainer title='Kunjungan EDC' description='This is Kunjungan EDC page'>
            <DashboardCard title='Kunjungan EDC'>
                <Typography>ini adalah halaman kunjungan EDC</Typography>
            </DashboardCard>
        </PageContainer>
    );
};

export default VisitEdc;
VisitEdc.getLayout = function getLayout(page: ReactElement) {
    return <FullLayout>{page}</FullLayout>
};