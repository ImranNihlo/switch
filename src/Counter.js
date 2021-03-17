import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

function Counter(props) {
    const counter = useSelector((state) => state);

    const dispatch = useDispatch();

    const [text, setText] = useState();

    const [number, setNumber] = useState();


    const handlePlus = () => {
        dispatch({type: 'plus', payload: number});
    }

    const handleMinus = () => {
        dispatch({type: 'minus', payload: number});
    }

    const handleReset = () => {
        dispatch({type: "reset"});
    }

    const handleAddState = () => {
        setNumber(`${text}`);
        setText("");
    }

    console.log(number)

    return (
        <div>
            <div>
                <input
                type="text"
                placeholder="Ведите цифру"
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
                <button onClick={handleAddState}>
                    указать state
                </button>
            </div>
            <div>
                {counter}
            </div>
            <div>
                <button onClick={handlePlus}>
                    +
                </button>
                <button onClick={handleMinus}>
                    -
                </button>
                <button onClick={handleReset}>
                    reset
                </button>
            </div>
        </div>


    );
}

export default Counter;