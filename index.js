/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react'
import {name as appName} from './app.json';

import { createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import allReducers from './reducers';
import MovieContainer from './containers/MovieContainer'

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

const App = () => (
    <Provider store={store}>
        <MovieContainer/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => App);
