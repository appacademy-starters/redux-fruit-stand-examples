import React from 'react';
import store from './store';

// This example based upon:
// https://gist.github.com/gaearon/1d19088790e70ac32ea636c025ba424e

const connect = (WrappedComponent, mapStateToProps, mapDispatchToProps) => (
  class extends React.Component {
    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...(mapStateToProps && mapStateToProps(store.getState(), this.props))}
          {...(mapDispatchToProps && mapDispatchToProps(store.dispatch, this.props))}
        />
      );
    }

    componentDidMount() {
      this.unsubscribe = store.subscribe(() => {
        this.forceUpdate();
      });
    }
  
    componentWillUnmount() {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
    }
  }
);

export default connect;
