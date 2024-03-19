import Header from "../organisms/Header/Header";
import Hero from "../organisms/Hero/Hero";
import Features from "../organisms/Features/Features";
import DownloadApp from "../organisms/DownloadApp/DownloadApp";
import Places from "../organisms/Places/Places";
import Purchases from "../organisms/Purchases/Purchases";
import Review from "../organisms/Review/Review";
import FAQ from "../organisms/FAQ/FAQ";
import Footer from "../organisms/Footer/Footer";
import Line from "../atoms/Line/Line";

const HomePage = () => {
  return (
    <>
      <Header />
      <Line />
      <Hero />
      <Features />
      <DownloadApp />
      <Line />
      <Places />
      <Line />
      <Purchases />
      <Line />
      <Review />
      <FAQ />
      <Footer />
    </>
  );
};

export default HomePage;
