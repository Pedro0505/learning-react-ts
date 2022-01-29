import React, { Component } from 'react';

interface MyState {
  count: number
}

interface MyProps {
  text: string
}

class Counter extends Component<MyProps, MyState> {
  
  state = {
    count: 0
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }

  render() {
    const { count } = this.state;
    const { text } = this.props;
    return (
      <div>
        <p> {text} {count} </p>
        <button type="button" onClick={ this.increment }>Adicionar</button>
      </div>
    );
  }
}

export default Counter;
