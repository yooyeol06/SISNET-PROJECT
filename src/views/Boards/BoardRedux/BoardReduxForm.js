import React, { Component } from 'react';
import { connect } from 'react-redux';

import {boardSave} from '../../../AppReducer'

class BoardReduxForm extends Component {
    state = {};
    initialSelectedBoard = {
        brdNo : "",
        brdTitle : "",
        brdWriter : "",
        brdDate : ""
    };

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    handleSave = () => {
        this.props.dispatch(boardSave(this.state));
        this.setState(this.initialSelectedBoard);
    }

    componentWillReceiveProps(nextProps){
        this.setState(nextProps.selectedBoard);
    }
    render(){
        return(
            <div>
                <input placeholder="title" name="brdTitle" value={this.state.brdTitle} onChange={this.handleChange} />
                <input placeholder="name" name="brdWriter" value={this.state.brdWriter} onChange={this.handleChange} />
                <button onClick={this.handleSave}>Save</button>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        selectedBoard : state.selectedBoard
    }
}

export default connect(mapStateToProps)(BoardReduxForm);