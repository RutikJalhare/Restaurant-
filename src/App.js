import About from "./About";
import Main from "./Main";
import Nav from './Nav'
import Chooseus from "./Chooseus";
import Menu from "./Menu";
import Special from "./Special";
import OrganizeEvents from "./OrganizeEvents";
import Contact from "./Contact";
import Foote from "./Foote";
function App() {
  return (
    <div className="App">
                 <Nav />
  <Main/>
  <About/>
  <Chooseus/>
  <Menu/>
  <Special/>
  <OrganizeEvents/>
  <Contact/>
  <Foote/>
    </div>
  );
}

export default App;
