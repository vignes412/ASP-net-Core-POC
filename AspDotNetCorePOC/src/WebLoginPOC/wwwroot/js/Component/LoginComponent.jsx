var React = require('react');

var LoginComponent = React.createClass({

    render: function() {
        return (
          <div>
            <input type="text" name="userName" value=""/>
            <input type="text" name="Password" value=""/>
                <button onClick={this.HandleLoginAuthentication}>Login</button>
          </div>
        );
    }

});

module.exports = LoginComponent;