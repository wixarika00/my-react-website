import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll.js'


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield:'' 
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then( response=> response.json())
            .then(users=> this.setState({ robots: users}))
    }

    onSearchChange = (event) => {  // any time you use your method on the component
        this.setState({searchfield: event.target.value})
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log(filteredRobots); // event always needs target and value - we need to remember that
    }
    render()  {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        ); 
    }
}

export default App;