import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { setAccessToken } from "./accessToken";
import { useLogoutMutation } from "./generated/graphql";
import { Bye } from "./Views/Bye";
import { Home } from "./Views/Home";
import { Login } from "./Views/Login";
import { NasaPOTD } from "./Views/NasaPOTD";
import { NearEarthObjects } from "./Views/NearEarthObjects";
import { News } from "./Views/News";
import { Register } from "./Views/Register";
export const Routes = () => {
  const [logout, { client }] = useLogoutMutation();
  return (
    <>
      <div className="">
        {/* <header>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/register">Register</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div>
            <Link to="/bye">Bye</Link>
          </div>
          <div>
            <button
              onClick={async () => {
                await logout();
                setAccessToken("");
                await client.resetStore();
              }}
            >
              Logout
            </button>
          </div>
        </header> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/bye" component={Bye} />
          <Route exact path="/news" component={News} />
          <Route exact path="/NASA-POTD" component={NasaPOTD} />
          <Route
            exact
            path="/near-earth-objects"
            component={NearEarthObjects}
          />
        </Switch>
      </div>
    </>
  );
};
