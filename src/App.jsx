import { useSelector } from "react-redux";
import { Detail, Layout, Home, Error404 } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const darkMode = useSelector((state) => state.global.darkMode);
  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/rest-countries-api/" element={<Home />} />
            <Route
              path="/rest-countries-api/detail/:countryName"
              element={<Detail />}
            />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
