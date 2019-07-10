import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './component/Counter';
import counter from './reducer';

const store = createStore(counter);
const counterEl = document.getElementById('counter')

const render = () => ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={()=>{store.dispatch({type: 'INCREMENT'})}}
        onDecrement={()=>{store.dispatch({type: 'DECREMENT'})}}
    />,
counterEl);

render();

store.subscribe(render);