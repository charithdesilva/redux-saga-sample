import { connect } from "react-redux";
import App from "../components/App";
import { fetchColorAPIRequest, fetchContinuouslyRequest } from "../actions";

const mapStateToProps = ({ colorAPI }) => ({ colorAPI });

const bindActionsToDispatch = (dispatch) => ({
  fetchColorAPIRequest: () => dispatch(fetchColorAPIRequest()),
  fetchContinuouslyRequest: () => dispatch(fetchContinuouslyRequest()),
});

const AppContainer = connect(mapStateToProps, bindActionsToDispatch)(App);

export default AppContainer;
