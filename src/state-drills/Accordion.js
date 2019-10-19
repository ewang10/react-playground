import React from "react";
import './Accordion.css'

class Accordion extends React.Component {
    static defaultProps = {sections: []};
    state = {
        currentSectionIndex: null
    };

    handleButtonClick(index) {
        this.setState({currentSectionIndex: index});
    }

    renderButtons() {
        const buttons = this.props.sections.map((section, index) => (
            <li key={index} className='Accordion-item'>
                <button onClick= {() => this.handleButtonClick(index)}>
                    {section.title}
                </button>
                {this.state.currentSectionIndex === index && <p>{section.content}</p>}
            </li>
        ));
        return buttons;
    }
    
    render() {
        return (
            <ul className="Accordion">
                {this.renderButtons()}
            </ul>
        )
    }
}

export default Accordion;