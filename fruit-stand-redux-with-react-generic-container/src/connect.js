import React from 'react';
import store from './store';

// This example based upon:
// https://gist.github.com/gaearon/1d19088790e70ac32ea636c025ba424e

// connect() is a function that injects Redux-related props into your component.
// You can inject data and callbacks that change that data by dispatching actions.
export default function connect(mapStateToProps, mapDispatchToProps) {
  // It lets us inject component as the last step so people can use it as a decorator.
  // Generally you don't need to worry about it.
  return function (WrappedComponent) {
    // It returns a component
    return class extends React.Component {
      render() {
        return (
          // that renders your component
          <WrappedComponent
            // with its props
            {...this.props}
            // and additional props calculated from Redux store
            {...(mapStateToProps && mapStateToProps(store.getState(), this.props))}
            {...(mapDispatchToProps && mapDispatchToProps(store.dispatch, this.props))}
          />
        )
      }
      
      componentDidMount() {
        // it remembers to subscribe to the store so it doesn't miss updates
        this.unsubscribe = store.subscribe(this.handleChange.bind(this))
      }
      
      componentWillUnmount() {
        // and unsubscribe later
        this.unsubscribe()
      }
    
      handleChange() {
        // and whenever the store state changes, it re-renders.
        this.forceUpdate()
      }
    }
  }
};
