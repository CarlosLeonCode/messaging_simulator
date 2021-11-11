import { createStore } from 'redux'
import reducer from './reducers'
import { getStateFromStorage, setStateToStorage } from './utils/localStorage'

const dataOnStorage = getStateFromStorage('store')

const store = createStore(
    reducer,
    dataOnStorage,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
    setStateToStorage({
        messages: store.getState().messages,
        emojisBox: store.getState().emojisBox
    }, 'store')
})

export default store