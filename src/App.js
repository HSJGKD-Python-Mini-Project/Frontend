import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Browse, Signin, Signup, Movies, Series, Movie, Seasonepisode} from "./pages";
import * as ROUTES from "./constants/routes";
import useToken from "./hooks/useToken";

export const TokenContext = React.createContext();

export default function App() {
  const { token, setToken } = useToken();

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <Router>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route path={ROUTES.BROWSE}>
          {token !== "undefined" ? <Browse /> : <Home />}
        </Route>
        <Route path={ROUTES.SIGN_IN}>
          <Signin />
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <Signup />
        </Route>
        <Route path={ROUTES.MOVIES}>
          <Movies />
        </Route>
        <Route exact path={ROUTES.SERIES}>
          <Series />
        </Route>
        <Route path={ROUTES.MOVIE}>
          <Movie />
        </Route>
        <Route path={ROUTES.SEASONEPISODE}>
          <Seasonepisode />
        </Route>
              
      </Router>
    </TokenContext.Provider>
  );
}
