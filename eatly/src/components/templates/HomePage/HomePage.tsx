import Header from "../../organisms/Header/Header";
import Hero from "../../organisms/Hero/Hero";
import Features from "../../organisms/Features/Features";
import DownloadApp from "../../organisms/DownloadApp/DownloadApp";
import Places from "../../organisms/Places/Places";
import Purchases from "../../organisms/Purchases/Purchases";
import Review from "../../organisms/Review/Review";
import FAQ from "../../organisms/FAQ/FAQ";
import Footer from "../../organisms/Footer/Footer";
import Line from "../../atoms/Line/Line";

const HomePage = () => {
  return (
    <main>
      <Header />
      <Line />
      <Hero />
      <Features />
      <DownloadApp />
      <Line />
      <div id="recipes">
        <Places />
      </div>

      <Line />
      <Purchases />
      <Line />
      <Review />
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </main>
  );
};

export default HomePage;
