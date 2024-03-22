import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null
  };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error) {
    console.error("Error capturado:", error.message);
    
  }

  render() {
    if (this.state.hasError) {
      return <p>Ha ocurrido un error. Consulta la consola para más detalles.</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
