
import Loader from '@/components/Loader';
import  { lazy, Suspense } from 'react';

// Dynamically import HomeContainer
const HomeContainer = lazy(() => import("../containers/home/home-container"));

const Home = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <HomeContainer />
    </Suspense>
  );
};

export default Home;