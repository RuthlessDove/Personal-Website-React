import './App.css';
import { SpeedInsights } from "@vercel/speed-insights/react"  // Get speed insights from vercel 
import { Analytics } from "@vercel/analytics/react"  // Get analytics insights from vercel
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import ScrollToTop from './components/ScrollToTop';
import BackToTopButton from './components/BackToTopButton';
import Preloader from './components/Preloader';

function App() {
  
  return (
    <div className='App'>
      <SpeedInsights />
      <Analytics/>
      {/* <Preloader /> */}
      <ScrollToTop />  
      <BackToTopButton />
      {/* Scroll to top of new page  */}
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
