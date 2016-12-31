var React = require('react');
var axios = require('axios');
var rp = require('request-promise');
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
            , JSON.stringify({
                    username: this.state.user,
                    password: this.state.pass
               
            }), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            .then(function (result) {
            console.log(result.data)
            }).catch(function (error) {
                console.log(error);
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