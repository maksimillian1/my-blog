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
import PostPage from './pages/PostPage';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
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
            <Route path='/post/:id'>
              <PostPage />
            </Route>
            <Redirect to="/" />    
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;

        