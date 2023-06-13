import { Component } from "react";

class ErroBoundary extends Component {
  constructor(props) {
    super();
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(err) {
    return { hasError: true };
  }
  componentDidCatch(err, info) {
    console.log(info);
  }
  render() {
    if (this.state.hasError) {
      return <h3>Somthing has occured</h3>;
    } else {
      return this.props.children;
    }
  }
}

export default ErroBoundary;
