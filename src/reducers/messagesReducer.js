const initProps = {
    list: []
}

export default function messagesReducer(state = initProps, action){
    switch(action.type){
        case 'ADD_MESSAGE':
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case 'DELETE_MSM':
            return{
                ...state,
                list: state.list.filter(msm => msm.id !== action.payload) 
            }
        default:
            return state
    }
}
