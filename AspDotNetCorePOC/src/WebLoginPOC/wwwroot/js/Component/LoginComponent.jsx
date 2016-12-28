var React = require('react');
var axios = require('axios');

var LoginComponent = React.createClass({
    getInitialState: function () {
        return {
            user: "",
            pass:""
        }
    },
    changeUser:function(e){
        this.setState({
            user:e.target.value
        });
    },
    changePass:function(e){
        this.setState({
            pass: e.target.value
        });
    },
    HandleLoginAuthentication:function(){
        axios.post("https://localhost:5000/token"
            , { username: this.state.user, pass: this.state.pass })
            .then(function (result) {
            console.log(result.data)
        });

    },
    render: function() {
        return (
          <div>
            <input type="text" name="userName" ref="userName" onChange={this.changeUser} value={this.state.user}/>
            <input type="text" name="Password" ref="password" onChange={this.changePass} value={this.state.pass}/>
                <button onClick={this.HandleLoginAuthentication}>Login</button>
          </div>
        );
    }

});

module.exports = LoginComponent;