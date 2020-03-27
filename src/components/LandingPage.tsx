import * as React from "react";
import { connect } from "react-redux";
import { logout, LogoutAction } from "../redux/users/userActions";
import { User } from "../redux/users/user";
import { StoreState } from "../redux/reducers";

interface OwnProps {

}

interface ConnectorProps {
  user: User
}

interface ActionCreators {
  logout: () => LogoutAction
}

type LandingPageProps = OwnProps & ConnectorProps & ActionCreators;

interface LandingPageState {
  user: User
}

class LandingPage extends React.Component<LandingPageProps, LandingPageState> {

    constructor(props:LandingPageProps) {
        super(props);
    }

    handleLogout = ():void => {
        console.log("Handle logout");
        this.props.logout();
    }

    render() {
        return (
            <div>
                <h1>Welcome {this.props.user.getDisplayName()}</h1>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        );
    }
}

function mapStateToProps(state: StoreState): ConnectorProps {
    return {
        user: state.userReducer.user
    }
}

function mapDispatchToProps(): ActionCreators {
    return {
        logout
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);