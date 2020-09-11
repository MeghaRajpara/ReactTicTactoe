import React, { Component } from 'react'
import Board from './Board';
import './ticgame.css';
import { withRouter } from 'react-router';


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true,
            stepNumber: 0,
            history: [
                { squares: Array(9).fill(null) }
            ]
        }
    }
    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step%2)===0
        })
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winner = checkWinner(squares);
        if (winner || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat({
                squares: squares
            }),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        });

    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = checkWinner(current.squares);
        const moves = history.map((step, move) => {
        });
        let status;
        if (winner) {
            if(winner == 'X'){
                status = 'Winner is ' + this.props.location.state.firstname;
            } else {
                status = 'Winner is ' + winner;
            }
            
        } else {
            status = '';
        }


        return (
            <div className="game">
                <div className="game-board">

                    <h1>First Player : {this.props.location.state!=null && this.props.location.state.firstname}</h1>
                    <h1>Second Player : {this.props.location.state!=null && this.props.location.state.sfirstname}</h1>
                    <Board onClick={(i) => this.handleClick(i)}
                        squares={current.squares} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ul>{moves}</ul>
                </div>
            </div>
        )
    }
}

function checkWinner(squares) {
    const combination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < combination.length; i++) {
        const [a, b, c] = combination[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}

export default withRouter(Game)