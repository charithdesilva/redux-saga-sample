import { connect } from "react-redux";
import App from "../components/App";
import {
  fetchColorAPIRequest,
  fetchContinuouslyRequest,
  fetchCancelledRequest,
} from "../actions";

const mapStateToProps = ({ colorAPI }) => ({ colorAPI });

const bindActionsToDispatch = (dispatch) => ({
  fetchCancelledRequest: () => dispatch(fetchCancelledRequest()),
  fetchColorAPIRequest: () => dispatch(fetchColorAPIRequest()),
  fetchContinuouslyRequest: () => dispatch(fetchContinuouslyRequest()),
});

const AppContainer = connect(mapStateToProps, bindActionsToDispatch)(App);

export default AppContainer;
