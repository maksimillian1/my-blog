import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Switch, Route, Redirect} from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { PostFormPage } from './pages/PostFormPage';
import { PostsPage } from './pages/PostsPage';
import { NavBar } from './components/NavBar';
import { rootReducer } from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk)),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <NavBar />
        <div className="container">
          <Switch>      
            <Route path='/' exact>
            </Route>
            <Route path='/posts' exact>
              <PostsPage />
            </Route>
            <Route path='/form' exact>
              <PostFormPage />
            </Route>
            <Redirect to="/" />    
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;

        