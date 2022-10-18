import { useState, useEffect } from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Introduce from "./components/Introduce/Introduce";
import Loading from "./components/Loading/Loading";
import MySkill from "./components/MySkill/MySkill";
import AboutMe from "./components/MyStory/AboutMe";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="App">
          <Introduce />
          <AboutMe />
          <MySkill />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
