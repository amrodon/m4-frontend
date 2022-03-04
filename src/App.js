import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/layouts/Header";
import Nav from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";

import contactoPage from './pages/contactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';


function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/nosotros" exact component={NosotrosPage} />
          <Route path="/contacto" exact component={contactoPage} />
          <Route path="/novedades" exact component={NovedadesPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;