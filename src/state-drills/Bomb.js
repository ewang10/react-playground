import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    text() {
        let text;
        if (this.state.count % 2 === 0) {
            text = 'tick';
        } else if (this.state.count >= 8) {
            
            clearInterval(this.interval);
            text = 'BOOM!!!!';
        } else {
            text = 'tock';
        }
        return text;
    }
    render() {
        return (
            <div>
                {this.text()}
            </div>
        );
    }
}

export default Bomb;