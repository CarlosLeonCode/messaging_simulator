const initProps = {
    show: false
}

export default function emojisBoxReducer(state = initProps, action){
    switch (action.type) {
        case 'HIDE_SHOW_BOX':
            return {
                ...state,
                show: action.payload
            }
        default:
            return state
    }
}