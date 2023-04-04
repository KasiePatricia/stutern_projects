import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <Header />
        <Search />
      </div>
      <div className="content-end">
        <Footer />
      </div>
    </div>
  );
}

export default App;
