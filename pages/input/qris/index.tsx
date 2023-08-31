import type { ReactElement } from 'react';
import { Typography } from '@mui/material';
import PageContainer from '../../../src/components/container/PageContainer';
import DashboardCard from '../../../src/components/shared/DashboardCard';
import FullLayout from '../../../src/layouts/full/FullLayout';

const QrisPage = () => {
  return (
          <PageContainer title="Akuisisi QRIS" description="this is Akuisisi QRIS">
      <DashboardCard title="Akuisisi QRIS">
        <Typography>Ini adalah halaman akuuisisi Qris</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default QrisPage;
QrisPage.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};