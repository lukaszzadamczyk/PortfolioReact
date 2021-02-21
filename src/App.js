import Header from "./components/layouts/Header";
import Navigation from "./components/layouts/Navigation";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="wrap">
        <Header />
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
