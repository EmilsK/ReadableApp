import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as API from "./services/api";
import Main from "./components/main";
import { convertToArray } from "./helpers/helpers";
import { setCategories } from "./actions/categories";

class App extends Component {
  componentWillMount() {
    this.props.getAllCategories();
  }

  render() {
    const { history, categories } = this.props;

    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={({ match }) => (
              <Main categories={categories} history={history} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllCategories: () => {
      API.getAllCategories().then(categories => {
        dispatch(setCategories(convertToArray(categories)));
      });
    }
  };
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
