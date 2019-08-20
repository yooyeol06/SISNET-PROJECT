/**
 * React 게시판 샘플
 * 작성일 : 2019-08-12
 * 작성자 : (주)시스넷
 * 내용 : React + Ajax로 게시판 만들기
 */

import React, { Component } from 'react';
import * as service from './Services/AjaxAPI'

class BoardAjaxMain extends Component {

    constructor(props){
        super();
        this.state = {
            fetching : false,
            userList : {
                userId : null,
                userName : null,
                userTel : null
            },
            post : {
                title : null,
                body : null
            },
            comments : []
        }
    }

    componentDidMount(){
        this.fetchPostInfo(1);
    }
    
    fetchPostInfo = async (postId) => {

        this.setState({
            fetching : true
        });

        const info = await Promise.all([
            service.getExmPost(postId),
            service.getExmComments(postId)
        ]);

        const list = await Promise.all([
            service.getListPost()
        ]);

        const {title, body} = info[0].data;

        const comments = info[1].data;

        const { userId, userName, userTel } = list[0].data;

        this.setState({
            postId,
            post : {
                title,
                body
            },
            comments,
            userList : {
                userId,
                userName,
                userTel
            },
            fetching : false
        });
    }
    
    render(){

        const { userList, fetching, post, comments } = this.state;

        return (
            <div>
                Ajax + React 게시판
            </div>
        );
    }
}

export default BoardAjaxMain;