const initialState = {
    edit: {}
}

const EDIT_POST = 'EDIT_POST'

export function editPost(post) {
    return {
        type: EDIT_POST,
        payload: post
    }
}

export default function editReducer(state = initialState, action) {
    switch (action.type) {
        case EDIT_POST:
            return {...state, edit: action.payload}
        default: 
            return state
    }
}
