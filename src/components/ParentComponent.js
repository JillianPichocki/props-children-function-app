import React, { Component } from 'react'
import DisplayComponent from './DisplayComponent';
import ChildComponent from './ChildComponent';


const styles = {
    parentStyles: {
        width: "100%",
        height: "20px",
        marginTop: "4rem"
    }
};

export default class ParentComponent extends Component {
    constructor(props) {
        super(props);

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            whatToSay: "",
            whatWasSaid: "",
        }
    }
    handleInput(e) {
        e.preventDefault();
        this.setState({ whatToSay: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        //check console to see if firing
        console.log("fired");
        //set the state for props and for value (prevents output from appearing when typing)
        this.setState({ whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay });
        //clear our input by resetting state
        this.setState({ whatToSay: "" });

    }
    render() {

        return (
            <div style={styles.parentStyles}>
                <div>
                    <input onChange={this.handleInput} type="text" name={"whatToSay"} value={this.state.whatToSay} placeholder="Say It, Don't Spray It!" />
                </div>
                <div>
                    <ChildComponent onClick={this.handleSubmit} />
                    <DisplayComponent sayWhat={this.state.whatWasSaid} />
                </div>
            </div>
        );
    }
}