import { useEffect, useState } from "react";
import Footer from "./container/Footer";
import Home from "./container/Home";
import NavBar from "./container/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailFact from "./container/DetailFact";
import AdminCheck from "./container/admin/AdminCheck";

function App() {
  const [factArray, setFactArray] = useState([]);
  const [selectedCategory, setSeletedCategory] = useState("general");

  const [showObj, setShowObj] = useState({
    title: null,
    img: null,
    desc: null,
    contentType: "jpg",
  });

  useEffect(() => {
    const fetchFact = async () => {
      const url = `http://localhost:3005/api/user/getfacts/${selectedCategory}`;
      let response = await fetch(url);
      response = await response.json();
      await setFactArray(response);
    };
    fetchFact();
  }, [selectedCategory]);

  const changeStateHandler = (tit, url, desc, contentType) => {
    setShowObj({
      title: tit,
      img: url,
      desc: desc,
      contentType: contentType,
    });
  };

  return (
    <div className="relative bg-gray-100">
      <NavBar setSeletedCategory={setSeletedCategory} />
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Home
                changeStateHandler={changeStateHandler}
                factArray={factArray}
                setFactArray={setFactArray}
                showObj={showObj}
                setShowObj={setShowObj}
                selectedCategory={selectedCategory}
              />
            }
          />
          <Route
            path="/read"
            element={
              <DetailFact
                changeStateHandler={changeStateHandler}
                factArray={factArray}
                showObj={showObj}
              />
            }
          />
          <Route
            path="/adminpanel"
            element={<AdminCheck selectedCategory={selectedCategory} />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
