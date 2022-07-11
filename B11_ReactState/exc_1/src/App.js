import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isExpand: false };
  }

  handler = () => {
    this.setState({ isExpand: true });
  };

  render() {
    return <title style={{}}>Conditional rendering</title>;
  }
}
