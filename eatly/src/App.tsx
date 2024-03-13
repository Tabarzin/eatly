import "./App.css";

import Header from "./components/organisms/Header/Header";
import Hero from "./components/organisms/Hero/Hero";
import Features from "./components/organisms/Features/Features";
import DownloadApp from "./components/organisms/DownloadApp/DownloadApp";

function App() {
  return (
    <div className="container">
      <Header />
      <hr className="header_line"></hr>
      <Hero />
      <Features />
      <DownloadApp />
    </div>
  );
}

export default App;
