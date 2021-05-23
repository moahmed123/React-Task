import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const browserHistory = createHistory()
const middleware = [thunk, routerMiddleware(browserHistory)]
const enhancers = []


export const history = browserHistory
export const store = createStore(
  combineReducers({ router: routerReducer, ...rootReducer }),
  compose(applyMiddleware(...middleware), ...enhancers),
)
