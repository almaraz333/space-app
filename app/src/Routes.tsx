import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { setAccessToken } from "./accessToken";
import { useLogoutMutation } from "./generated/graphql";
import { Bye } from "./Views/Bye";
import { Home } from "./Views/Home";
import { Login } from "./Views/Login";
import { Register } from "./Views/Register";
export const Routes = () => {
  const [logout, { client }] = useLogoutMutation();
  return (
    <BrowserRouter>
      <div>
        <header>
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
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/bye" component={Bye} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
