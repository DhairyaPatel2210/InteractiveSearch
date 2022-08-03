import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css'
import Scroll from './Scroll'

class App extends React.Component{
    
    constructor(){
        super();
        this.state = {
            robots : [],
            searchFiledValue : ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => this.setState({robots : user}))
    }

    onlcick = (event) => {
        this.setState({searchFiledValue : event.target.value})
    }
    
    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchFiledValue.toLowerCase())
        })
        return(
            <div className='tc' >
                <h1 className="title">RoboFriends</h1>
                <SearchBox searchChange = {this.onlcick}/>
                <Scroll>
                    <CardList robots = {filteredRobots}/>
                </Scroll>
            </div>
        )
    }
}
export default App