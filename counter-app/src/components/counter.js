import { Component } from "react";
import './counter.css'

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }
    increment() {
        this.setState((prevState) => ({
            count: prevState.count +1,
        }));
    }
    decrement() {
        this.setState((prevState) => ({
            count: prevState.count -1,
        }));
    }
    reset() {
        this.setState({
            count: 0,
        });
    }

    render() {
        return (
            <div className="counter">
                <h1>COUNTER APP</h1>
                <h2>{this.state.count}</h2>
                <div className="buttons">
                    <button onClick={() => this.increment()}>+</button>
                    <button onClick={() => this.decrement()}>-</button>
                    <button onClick={() => this.reset()}>Reset</button>
                </div>
            </div>
        );
    }
}

export default Counter