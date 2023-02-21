import { USER_DATA_ADD, USER_NUM_INC } from "./action.Type"

const initState = {
    user : {},
    marks : 0,
}

export default function UserReducer(state = initState, action) {
    const {type,payload} = action
    switch(type){
        case USER_DATA_ADD : return {
            ...state,
            user : payload
        }
        case USER_NUM_INC : return {
            ...state,
            marks : state.marks + 1
        }
        default : return state
    }
}

