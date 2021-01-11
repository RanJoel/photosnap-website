import Head from "next/head";
import Navbar from "../components/Navbar";
import Home1 from "../components/Home1";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photosnap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Home1 />

      <Footer />
    </div>
  );
}
