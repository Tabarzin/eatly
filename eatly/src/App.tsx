import "./App.css";

import Logo from "./components/atoms/Logo/Logo";
import NavMenu from "./components/molecules/NavMenu/NavMenu";
import Header from "./components/organisms/Header/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <hr className="header_line"></hr>
    </div>
  );
}

export default App;
