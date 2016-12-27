var React = require('react');
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Match;
var BrowserRouter= ReactRouter.BrowserRouter;
var Provider = require('react-redux').Provider,
  store = require('../Store/store.jsx');

var Login= require('../Component/LoginComponent.jsx');

var App = React.createClass({

    render: function() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                       <Match pattern="/" render={()=><Login/>}/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }

});

module.exports = App;