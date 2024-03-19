import { Component } from "react";

class Counter extends Component{
    state = {
        number: 0
    };

    counterChangePlus = () => {
        this.setState({
            number: this.state.number + 1
        });
    };

    counterChangeSubstract = () => {
        this.setState({
            number: this.state.number - 1
        });
    };

    render() {
        return (
            <>
                <p>{this.state.number}</p>
                <button onClick={this.counterChangePlus}>Incrementar</button>
                <button onClick={this.counterChangeSubstract}>Decrementar</button>
            </>
        );
    }
}

export default Counter