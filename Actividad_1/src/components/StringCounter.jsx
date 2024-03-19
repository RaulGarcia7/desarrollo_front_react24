import { Component } from "react";

class StringCounter extends Component{
    state = {
        text: ""
    };

    gerRandomLetter = () => {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        return alphabet[randomIndex];
    }

    letterPlus = () => {
        this.setState((prevState) => {
            return {
                text: prevState.text + this.gerRandomLetter()
            };
        });
    };

    letterSubstract = () => {
        this.setState((prevState) => {
            
            if (prevState.text.length > 0) {
                return {
                    text: prevState.text.slice(0, -1)
                };
            }
            return prevState;            
        });
    };

    render() {
        return (
            <>
                <p>{this.state.text}</p>
                <button onClick={this.letterPlus}>Añadir letra</button>
                <button onClick={this.letterSubstract}>Quitar letra</button>
            </>
        )
    }
}

export default StringCounter