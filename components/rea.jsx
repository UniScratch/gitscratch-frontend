import React from 'react'
import ReactDOM from 'react-dom'
// const redux = require('redux')
// const thunk = require('redux-thunk').default
// const Provider = require('react-redux').Provider

// import * as serviceWorker from './serviceWorker';

// const IntlProvider = require('react-intl').IntlProvider
const ProjectView = require('./project-view.jsx')

// const locale = 'en'
// const reducer = {
//   ...ProjectView.guiReducers
// }

// const reducers = redux.combineReducers(reducer)

// const initState = {
//   locales: ProjectView.initLocale(ProjectView.localesInitialState, locale),
//   scratchGui: ProjectView.initGuiState(ProjectView.guiInitialState)
// }

// const composeEnhancers = redux.compose
// const enhancers = composeEnhancers(
//   // redux.applyMiddleware(thunk),
//   ProjectView.guiMiddleware
// )

// const store = redux.createStore(
//   reducers,
//   initState,
//   enhancers
// )

// const messages = {}

ReactDOM.render(
  // <Provider store={store}>
  //     <IntlProvider
  //         locale={locale}
  //         messages={messages}
  //     >
                <ProjectView.View />
  //     </IntlProvider>
  // </Provider >, document.getElementById('app')
)
