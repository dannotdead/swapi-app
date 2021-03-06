import React, {Component} from 'react';
import ErrorIndicator from '../ErrorIndicator';

class ErrorBoundary extends Component {

  state = {
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true
    })
  }

  render() {
    const { hasError } = this.state

    if (hasError) {
      return <ErrorIndicator />
    }

    return this.props.children
  }
}

export default ErrorBoundary