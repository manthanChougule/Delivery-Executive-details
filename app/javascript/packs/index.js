// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import { Provider } from 'react-redux'
//import { store } from '../components/reducers'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { formReucer } from '../components/reducers'
const store = createStore(formReucer)



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>,
    document.body.appendChild(document.createElement('div')),
  )
})
