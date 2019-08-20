import { createAction, handleActions } from 'redux-actions';

const BOARD_SAVE = 'SAVE';
const BOARD_REMOVE = 'REMOVE';
const BOARD_READ = 'READ';
const BOARD_LIST = 'LIST';

export const boardSave = createAction(BOARD_SAVE);
export const boardRemove = createAction(BOARD_REMOVE, brdNo => brdNo);
export const boardRead = createAction(BOARD_READ);
export const boardList = createAction(BOARD_LIST);

// export const boardSave = (data) => ({
//     type : BOARD_SAVE,
//     data
// });

// export const boardRemove = (brdNo) => ({
//     type : BOARD_REMOVE,
//     brdNo : brdNo
// });

// export const boardRead = (brdNo) => ({
//     type : BOARD_READ,
//     brdNo : brdNo
// });

// export const boardList = () => ({ type : BOARD_LIST });

const initialState = {
    maxNo : 3,
    boards : [
        {
            brdNo : 1,
            brdWriter : 'Lee SunSin',
            brdTitle : 'If you intend to live then you die',
            brdDate : new Date()
        },
        {
            brdNo : 2,
            brdWriter : 'So Sino',
            brdTitle : 'Founder for Two countries',
            brdDate : new Date()
        }
    ],
    selectedBoard : {}
};

export default handleActions({
    [BOARD_SAVE]: (state, { payload: data }) => {
        let boards = state.boards;
        if (!data.brdNo) {                                              // new : Insert
            let maxNo = state.maxNo;
            return {maxNo: maxNo+1, boards: boards.concat({...data, brdNo:maxNo, brdDate: new Date()}), selectedBoard: {} };
        } else {                                                        // Update
            return {...state, boards: boards.map(row => data.brdNo === row.brdNo ? {...data }: row), selectedBoard: {} };
        }    
    },
    [BOARD_REMOVE]: (state, { payload: brdNo }) => {
        let boards = state.boards;
        return {...state, boards: boards.filter(row => row.brdNo !== brdNo), selectedBoard: {} };
    },
    [BOARD_READ]: (state, { payload: brdNo }) => {
        let boards = state.boards;
        return {...state, selectedBoard: boards.find(row => row.brdNo === brdNo)
        };
    }
}, initialState);