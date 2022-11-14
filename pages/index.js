import { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import Works from '../components/Work/Works';
import Contact from '../components/Contact/Contact';

import { SiteContext } from '../context/SiteContext';

import Filter from '../components/Filter/Filter';
import { DataContext } from '../context/DataContext';
import Hero from '../components/Hero';
import LatestWork from '../components/Work/LatestWork';
import Connect from '../components/Connect/Connect';

export default function Home() {
  const [siteData] = useContext(DataContext);
  const { getProjects, getDesignProjects, getWebDevProjects } = useContext(SiteContext);

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
