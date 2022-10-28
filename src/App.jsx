import "./App.css";
import "./main_styles.css";
import MainPage from "./main_Component/MainPage";

function App() {
  return (
    <>
      <div className="main__Conatiner">
        <div className="navBar">
          <h1 className="navBar__title">SuperQuest</h1>
        </div>
        <div className="App">
          <MainPage />
        </div>
      </div>
    </>
  );
}

export default App;
