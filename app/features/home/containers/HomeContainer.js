import React, { Component } from "react";
import HomeView from "./HomeView";
import { connect } from "react-redux";
import { requestList } from "../actions";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.requestList();
  }

  render() {
    return <HomeView {...this.props} />;
  }
}

function mapStateToProps({ listReducer }) {
  const { list, loadingList } = listReducer;
  return { list, loadingList };
}
function mapDispatchToProps() {
  return {
    requestList
  };
}
export default connect(mapStateToProps, mapDispatchToProps())(HomeContainer);
