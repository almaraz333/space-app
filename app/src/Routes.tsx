import { Route, Switch } from "react-router-dom";
import { Bye } from "./Views/Bye";
import { Home } from "./Views/Home";
import { Login } from "./Views/Login";
import { NasaPOTD } from "./Views/NasaPOTD";
import { NearEarthObjects } from "./Views/NearEarthObjects";
import { News } from "./Views/News";
import { Register } from "./Views/Register";
export const Routes = () => {
  return (
    <>
      <div className="">
        <Switch>
          <Route exact path="/login" component={Login} />
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
