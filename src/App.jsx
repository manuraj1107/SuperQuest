import { useState } from "react";
import "./App.css";
import "./main_styles.css";
import MainPage from "./main_Component/MainPage";
import Navbar from "./main_Component/Navbar";
import Routes from "./main_Component/Router";
import Footer from "./main_Component/Footer";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <>
      <div className={darkTheme ? 'dark' : ''}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <MainPage />
        <Routes />
        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;

{/*  */}