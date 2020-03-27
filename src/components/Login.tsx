import * as React from "react";
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import UserCredential from "../redux/users/userCredential";
import { storeUserInfo, StoreUserInfoAction } from "../redux/users/userActions";

interface OwnProps {

}

interface ConnectorProps {
  
}

interface ActionCreators {
  storeUserInfo: (credential:UserCredential) => StoreUserInfoAction
}

type LoginProps = OwnProps & ConnectorProps & ActionCreators;

interface LoginState {
  credential:UserCredential
}


class Login extends React.Component<LoginProps, LoginState> {

  constructor(props:any) {
    super(props);
    this.state = {
      credential: {
        username: "",
        password: ""
      }
    };
  }

  onUsernameChange = (event:React.FormEvent<HTMLInputElement>) =>{
    this.setState({
      ...this.state,
      credential: {
        ...this.state.credential,
        username: event.currentTarget.value
      }
    })
  }

  onPasswordChange = (event:React.FormEvent<HTMLInputElement>) =>{
    this.setState({
      ...this.state,
      credential: {
        ...this.state.credential,
        password: event.currentTarget.value
      }
    })
  }

  handleLogin = () => {
    console.log("Handle login for: ", this.state.credential);
    this.props.storeUserInfo(this.state.credential);
  }

  render() {
    return (
      <div>
        <h1>
          Login
        </h1>
        <input className="username" value={this.state.credential.username} onChange={this.onUsernameChange}/> <br />
        <input className="password" value={this.state.credential.password} onChange={this.onPasswordChange}/> <br />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

function mapDispatchToProps (): ActionCreators {
  return {
    storeUserInfo
  };
}

export default connect(null, { storeUserInfo })(Login);