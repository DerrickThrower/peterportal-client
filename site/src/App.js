import React from 'react'; 

import {
  BrowserRouter as Router,
  Switch, Redirect,
  Route
} from 'react-router-dom';

import AppHeader from './component/AppHeader/AppHeader.jsx';
import Footer from './component/Footer/Footer';

import SearchPage from "./pages/SearchPage";
import CoursePage from "./pages/CoursePage/CoursePage.jsx";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <Router>
    <AppHeader/>  
        <div style={{display: "flex", padding: "4rem 3rem"}}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/search/courses" />
            </Route>

              <Route path="/search/:index" component={SearchPage} />
              <Route path="/course/:id" component={CoursePage} />
              <Route component={ErrorPage} />
          </Switch>
        </div>


      <Footer/>
    </Router>
  )
}
