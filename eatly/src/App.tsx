// import Header from "./components/organisms/Header/Header";
// import Hero from "./components/organisms/Hero/Hero";
// import Features from "./components/organisms/Features/Features";
// import DownloadApp from "./components/organisms/DownloadApp/DownloadApp";
// import Places from "./components/organisms/Places/Places";
// import Purchases from "./components/organisms/Purchases/Purchases";
// import Review from "./components/organisms/Review/Review";
// import FAQ from "./components/organisms/FAQ/FAQ";
// import Footer from "./components/organisms/Footer/Footer";
// import Line from "./components/atoms/Line/Line";
import HomePage from "./components/templates/HomePage/HomePage";
import BlogPage from "./components/templates/BlogPage/BlogPage";
import BlogArticle from "./components/templates/BlogArticle/BlogArticle";

// function App() {
//   return (
//     <div className="container">
//       {/* <Header />
//       <Line />
//       <Hero />
//       <Features />
//       <DownloadApp />
//       <Line />
//       <Places />
//       <Line />
//       <Purchases />
//       <Line />
//       <Review />
//       <FAQ />
//       <Footer /> */}
//       <HomePage />
//       <BlogPage />
//       <BlogArticle />
//     </div>
//   );
// }

import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/article" element={<BlogArticle />} />

        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>

      <HomePage />
    </div>
  );
}

export default App;
