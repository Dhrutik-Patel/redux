import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { decrement, increment, reset } from "../../features/counter/counterSlice";
import "./Counter.css";

const Counter: React.FC = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector((state) => state.counter.value);

    return (
        <div className='counter'>
            <h1>Count: {count}</h1>
            <button className='increment' onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button className='decrement' onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            <button className='reset' onClick={() => dispatch(reset())}>
                Reset
            </button>
        </div>
    );
};

export default Counter;
