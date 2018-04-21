import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";

export default class ReduxExample extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Redux Example</div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('redux_example')) {
    ReactDOM.render(<ReduxExample />, document.getElementById('redux_example'));
}

const initialState = {
    result: 10,
    lastValues: [],
    name: "Krishan"
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case 'SUB':
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }
    return state;
};

const store = createStore(reducer);

store.subscribe(() =>{
    console.log("Store updated! ", store.getState());
});

store.dispatch({
    type: "ADD",
    payload: 50
});

store.dispatch({
    type: "ADD",
    payload: 150
});

store.dispatch({
    type: "SUB",
    payload: 20
});
