import Header from "./components/organisms/Header/Header";
import Hero from "./components/organisms/Hero/Hero";
import Features from "./components/organisms/Features/Features";
import DownloadApp from "./components/organisms/DownloadApp/DownloadApp";
import Places from "./components/organisms/Places/Places";
import Purchases from "./components/organisms/Purchases/Purchases";
import Review from "./components/organisms/Review/Review";
import FAQ from "./components/organisms/FAQ/FAQ";
import Footer from "./components/organisms/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <hr className="line"></hr>
      <Hero />
      <Features />
      <DownloadApp />
      <hr className="line"></hr>
      <Places />
      <Purchases />
      <hr className="line"></hr>
      <Review />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
