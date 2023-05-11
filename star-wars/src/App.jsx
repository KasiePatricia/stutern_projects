import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
// import MainPage from "./pages/MainPage";
// import Header from "./components/Header/Header";
// import MovieDetail from "./components/MovieDetail/MovieDetail";
// import MovieList from "./components/MovieList/MovieList";

import loadable from "@loadable/component";

const Header = loadable(() => import("./components/Header/Header"));
const MovieList = loadable(() => import("./components/MovieList/MovieList"));
const MovieDetail = loadable(() =>
  import("./components/MovieDetail/MovieDetail")
);

function App() {
  return (
    <>
      <Fragment>
        <Header />
        <Routes>
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/" element={<MovieList />} />
        </Routes>
      </Fragment>
    </>
  );
}

export default App;
