import React, { Component } from 'react';
import { connect } from 'react-redux';

import { boardRead, boardRemove } from '../../../AppReducer';

class BoardReduxItem extends Component {
    handleUpdateForm = (brdNo) => {
        this.props.dispatch(boardRead(brdNo));
    }

    render(){
        const row = this.props.row;

        return(
            <tr>
                <td>{row.brdNo}</td>
                <td><a onClick={() => this.handleUpdateForm(row.brdNo)}>{row.brdTitle}</a></td>
                <td>{row.brdWriter}</td>
                <td>{row.brdDate.toLocaleDateString('ko-KR')}</td>
                <td><button onClick={() => this.props.dispatch(boardRemove(row.brdNo))}>X</button></td>
            </tr>
        );
    }
}

export default connect()(BoardReduxItem);