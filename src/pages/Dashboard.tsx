
import Loader from '@/components/Loader';
import  { lazy, Suspense } from 'react';

// Dynamically import RegisterContainer
const RegisterContainer = lazy(() => import("../containers/charts"));

const Dashboard = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <RegisterContainer />
    </Suspense>
  );
};

export default Dashboard;