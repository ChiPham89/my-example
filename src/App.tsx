import * as React from "react";
import { connect } from "react-redux";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import { User } from "./redux/users/user";
import { StoreState } from "./redux/reducers";

interface AppState {
    user: User
}

class App extends React.Component<AppState,{}> {

    constructor(props:AppState) {
        super(props);
    }
    
    render() {
        console.log("Render with: ", this.props.user);
        const user = this.props.user ? this.props.user : new User();
        const activePage = user.getUserName() === "" ? (<Login />) : (<LandingPage/>);

        return (
            <div>
                {activePage}
            </div>
        );
    }
}

const mapStateToProps = (state:StoreState) => {
    console.log("map state: ", state);
    return {
        user: state.userReducer.user
    };
}

export default connect(mapStateToProps)(App);
