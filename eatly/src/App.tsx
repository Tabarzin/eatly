import Header from "./components/organisms/Header/Header";
import Hero from "./components/organisms/Hero/Hero";
import Features from "./components/organisms/Features/Features";
import DownloadApp from "./components/organisms/DownloadApp/DownloadApp";
import Places from "./components/organisms/Places/Places";
import Purchases from "./components/organisms/Purchases/Purchases";
import Review from "./components/organisms/Review/Review";
import FAQ from "./components/organisms/FAQ/FAQ";
import Footer from "./components/organisms/Footer/Footer";
import Line from "./components/atoms/Line/Line";

function App() {
  return (
    <div className="container">
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
    </div>
  );
}

export default App;
