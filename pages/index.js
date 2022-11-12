import { useContext, useEffect } from 'react';
// import Hero from '../components/Hero';
import Layout from '../components/Layout';
// import LatestWork from '../components/Work/LatestWork';
import Works from '../components/Work/Works';
// import Connect from '../components/Connect/Connect.jsx';
import Contact from '../components/Contact/Contact';

import { SiteContext } from '../context/SiteContext';

import Filter from '../components/Filter/Filter';
import { DataContext } from '../context/DataContext';
import dynamic from 'next/dynamic';

export default function Home() {
  const [siteData] = useContext(DataContext);
  const { getProjects, getDesignProjects, getWebDevProjects } = useContext(SiteContext);

  const Hero = dynamic(() => import("../components/Hero"), {
    ssr: false,
  });
  const LatestWork = dynamic(() => import('../components/Work/LatestWork'), {
    ssr: false,
  });

  const Connect = dynamic(() => import('../components/Connect/Connect.jsx'), {
    ssr: false,
  });

  useEffect(() => {
    getProjects(siteData);
    getWebDevProjects(siteData);
    getDesignProjects(siteData);
  }, []);

  return (
    <>
      <Layout>
        <Hero />
        <LatestWork />
        <Filter />
        <Works />
        <Connect />
        <Contact />
      </Layout>
    </>
  );
}
