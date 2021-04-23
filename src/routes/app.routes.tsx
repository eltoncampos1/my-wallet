import { Switch, Route } from "react-router-dom";

import { Layout } from "../components/Layout";
import { Dashboard } from "../pages/Dashboard";
import { List } from "../pages/List";

export function AppRoutes() {
  return (
    <Layout>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/list/:type" exact component={List} />
      </Switch>
    </Layout>
  );
}
