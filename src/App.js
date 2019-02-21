import React from 'react';
// import logo from './logo.svg';
import './App.css';

// When components only use a render function, you can use a function rather than extend React.Compnent
// class Square extends React.Component {
function Square(props) {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     value: null
  //   }
  // }

  // setState({value}) {
  //   console.log(value)
  //   this.state = value
  // }

  // Function components don't need the render method
  // render() {
    return (
      <button
        className="square"
        onClick={props.onClick} // For functional components, props via argument not this
        // onClick={() => this.props.onClick()}
        // onClick={() => this.setState({value: 'X'}) }
      >
        {/* {this.state.value} */}
        {this.props.value}
      </button>
    );
  // }
}

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null)
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice(); // Copy array
    squares[i] = 'X'; // Set squares
    this.setState({squares})
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
