export const getStateFromStorage = key => {
    const data = localStorage.getItem(key)
    return (data === null)
        ? null
        : JSON.parse(data)
}

export const setStateToStorage = (state, key) => {
    localStorage.setItem(key, JSON.stringify(state))
}