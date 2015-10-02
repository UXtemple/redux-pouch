import { add, clear, fetchAll } from './actions';
import { connect } from 'react-redux';
import React, { Component } from 'react';

class Add extends Component {
  onSubmit(event) {
    event.preventDefault();

    this.props.add(this.refs.name.value);
    this.refs.name.value = '';
  }

  render() {
    return (
      <form onSubmit={::this.onSubmit}>
        <input type='text' ref='name' autoFocus={true} />
        <button type='submit'>add</button>
      </form>
    );
  }
}

function getColour(isSyncing, error) {
  return isSyncing ? 'yellow' : (error ? 'red' : 'green');
}

const Box = props => (
  <div style={{color: getColour(props.isSyncing, props.error)}}>
    {props.name}
  </div>
);

class List extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAll());
  }

  render() {
    return (
      <div>
        {this.props.boxes.map((box, i) => <Box key={i} {...box} />)}
        <Add add={(name) => this.props.dispatch(add({name})) } />
        <button onClick={() => this.props.dispatch(clear())}>clear</button>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    boxes: state.boxes
  };
}

export default connect(mapStateToProps)(List);
