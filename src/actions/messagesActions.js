export const addMessageAction = state => {
    return{
        type: 'ADD_MESSAGE',
        payload: state
    }
}

export const deleteMessage = id => {
    return{
        type: 'DELETE_MSM',
        payload: id
    }
}