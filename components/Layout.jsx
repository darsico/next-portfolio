import dynamic from "next/dynamic";
import Head from "next/head";
// import Footer from "./Footer/Footer";
// import Navbar from "./Navbar/Navbar,";

const Layout = ({ children, title, description }) => {
  const pageTitle = title ? `${title} | Diego's Portfolio` : "Diego's Portfolio";
  const pageDescription = description || "Portafolio donde se muestra los trabajos principales de Diego Huaman";

  const Navbar = dynamic(() => import("./Navbar/Navbar,.jsx"), {
    ssr: false,
  });

  const Footer = dynamic(() => import("./Footer/Footer.jsx"), {
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} key="title" />
        <meta name="og:description" content={pageDescription}></meta>
        <meta property="title" content={pageTitle} key="title" />
        <meta name="description" content={pageDescription}></meta>
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://darsico.github.io/portafolio_dh/images/fondo-card.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        {/* TODO: Add query for site */}
        {/* <meta property="twitter:url" content={siteUrl} /> */}
        <meta property="twitter:title" content={pageTitle} key="title" />
        <meta name="twitter:description" content={pageDescription}></meta>
        <meta property="twitter:image" content="https://darsico.github.io/portafolio_dh/images/fondo-card.jpg" />
      </Head>
      <Navbar />
      <main className="pt-28">{children}</main>
      <Footer />
    </>
  );
};


export default Layout;
