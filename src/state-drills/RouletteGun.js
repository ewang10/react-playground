import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8,
    };
    constructor(props) {
        super(props);
        this.state = {
            chamber: null,
            spinningTheChamber: false
        };
    }
    handleButtonClick = () => {
        this.setState({spinningTheChamber: true});
        this.timeout = setTimeout(()=> {
            let rndNum = Math.ceil(Math.random() * 8);
            this.setState({chamber: rndNum, spinningTheChamber: false});
        }, 2000);
    };
    componentWillUnmount() {
        clearTimeout(this.timeout);
    }
    text() {
        let text;
        if (this.state.spinningTheChamber === true) {
            text = 'spinning the chamber and pulling the trigger! ...';
        } else if (this.state.chamber === this.props.bulletInChamber) {
            text = 'BANG!!!!';
        } else {
            text = "you're safe!!";
        }
        return text;
    }
    render() {
        return (
            <div>
                <p>{this.text()}</p>
                <button onClick = {this.handleButtonClick}>
                    Pull the trigger!
                </button>
            </div>
        );
    }
}

export default RouletteGun;