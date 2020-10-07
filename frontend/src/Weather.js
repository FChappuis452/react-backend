import React, {Component} from 'react';
import axios from 'axios'

export default class Weather extends Component {
    constructor(){
        super()
        this.state = {
            weather: "Not yet gotten"
        };
    }

    handleButtonClick = () => {
        axios.get('/getWeatherToronto').then(response => {
            this.setState({
                weather: response.data.temperature
            });
        });
    };

    render(){
        return (
            <div>
                <button onClick={this.handleButtonClick}>Get Weather</button>
                <h1>The weather in Toronto is: {this.state.weather}</h1>
            </div>
        );
    }
    
}