import React, {Component} from 'react';
import Graph from "./Graph";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catVotes: null, //I hope this isn't wrong. But with the 0, it looks ugly with the black line
            dogVotes: null
        };
    }

    render() {
        return (<div className="App">
            <Graph catVotes = {this.state.catVotes} dogVotes = {this.state.dogVotes} />
            <button onClick={this.handleCatClick.bind(this)}>Vote for Cats</button>
            <button onClick={this.handleDogClick.bind(this)}>Vote for Dogs</button>
        </div>);
    }

    handleCatClick() {
        this.setState(prevState => ({catVotes: prevState.catVotes + 1}));
    }
    handleDogClick() {this.setState(prevState => ({dogVotes: prevState.dogVotes + 1}));
    }
}

export default App;
