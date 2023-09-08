import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReduser from './redusers'
import { setLocalStorage } from "@utils/localStorage";

const store = createStore(
   rootReduser,
   composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => {
   setLocalStorage('store', store.getState().favoriteReduser)
})
export default store