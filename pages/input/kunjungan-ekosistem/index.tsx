import type { ReactElement } from 'react';
import { Typography } from '@mui/material';
import PageContainer from '../../../src/components/container/PageContainer';
import DashboardCard from '../../../src/components/shared/DashboardCard';
import FullLayout from '../../../src/layouts/full/FullLayout';

const VisitEkosistem = () => {
    return (
        <PageContainer title='Kunjungan Ekosistem' description='This is Kunjungan Ekosistem page'>
            <DashboardCard title='Kunjungan Ekosistem'>
                <Typography>ini adalah halaman kunjungan Ekosistem</Typography>
            </DashboardCard>
        </PageContainer>
    );
};

export default VisitEkosistem;
VisitEkosistem.getLayout = function getLayout(page: ReactElement) {
    return <FullLayout>{page}</FullLayout>
};