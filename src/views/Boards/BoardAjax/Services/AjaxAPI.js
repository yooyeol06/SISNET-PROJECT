import axios from 'axios';

export function getListPost(){
    return axios.post('http://localhost:8080/jpaTest/postApiTest');
}

export function getListGet(){
    return axios.get('http://localhost:8080/jpaTest/postApiTest');
}

/**
 * VELOPERT.LOG 예제 axios 호출 - 포스트 리스트
 * @param {*} postId 
 */
export function getExmPost(postId){
    return axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
}

/**
 * VELOPERT.LOG 예제 axios 호출 - 포스트 코멘트
 * @param {*} postId 
 */
export function getExmComments(postId){
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
}