var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Provider = require('react-redux').Provider,
  store = require('../Store/store.jsx');

var App= require('../Component/App.jsx');

var routes = ()=> (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={App}/>
        </Router>
    </Provider>
);

module.exports = routes;