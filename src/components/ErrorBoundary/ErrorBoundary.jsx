import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    console: null,
  };
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    const { error } = this.state;
    if (error) {
      return (
        <div>
          <p>Что то пошло не так </p>
          <p>{error.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
