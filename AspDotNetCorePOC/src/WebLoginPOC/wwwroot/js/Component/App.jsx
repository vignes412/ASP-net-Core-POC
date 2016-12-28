var React = require('react');
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Match = ReactRouter.Match;
var BrowserRouter= ReactRouter.BrowserRouter;
var Provider = require('react-redux').Provider;
var Login= require('../Component/LoginComponent.jsx');

var App = React.createClass({

    render: function() {
        return (
                <BrowserRouter>
                    <div>
                       <Match pattern="/" render={()=><Login/>}/>
                    </div>
                </BrowserRouter>
        );
    }

});

module.exports = App;