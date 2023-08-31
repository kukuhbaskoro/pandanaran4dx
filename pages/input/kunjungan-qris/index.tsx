import type { ReactElement } from 'react';
import { Typography } from '@mui/material';
import PageContainer from '../../../src/components/container/PageContainer';
import DashboardCard from '../../../src/components/shared/DashboardCard';
import FullLayout from '../../../src/layouts/full/FullLayout';

const VisitQris = () => {
    return (
        <PageContainer title='Kunjungan QRIS' description='This is Kunjungan QRIS page'>
            <DashboardCard title='Kunjungan QRIS'>
                <Typography>ini adalah halaman kunjungan qris</Typography>
            </DashboardCard>
        </PageContainer>
    );
};

export default VisitQris;
VisitQris.getLayout = function getLayout(page: ReactElement) {
    return <FullLayout>{page}</FullLayout>
};