import "./App.css";
import UserProfile from "./UserProfile";
// import { profiles } from "./data";
import profiles from "./data.json";

function App() {
  // console.log(profiles, "j");

  return (
    <>
      <UserProfile profiles={profiles} />
    </>
  );
}

export default App;
