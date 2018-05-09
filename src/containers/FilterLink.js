import React from "react";
import { connect } from "react-redux";

import { setFilter } from "../actions";
import Link from "../components/Link";

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => dispatch(setFilter(ownProps.filter))
  };
}

function mapStateToProps(state, ownProps) {
  return {
    active: ownProps.filter === state.filter
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);
