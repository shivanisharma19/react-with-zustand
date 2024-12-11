import React from 'react';
import './Counter.css';
import useCounterStore, { count } from './useCounterStore.ts';

const Counter = () =>  {
  const {currVal, preVal, futVal } = useCounterStore((state)=> state)

  // const increment = (value: number) => {
  //   count('INCREMENT', value)
  // }

  // const decrement = (value: number) => {
  //   count('DECREMENT', value)
  // }
    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{0}</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={() => count('INCREMENT', 1)}
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              onClick={() => count('INCREMENT', 5)
              }
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              onClick={() => count('DECREMENT', 1)
              }
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={() => count('DECREMENT', 5)
              }
            >
              -5
            </button>
            <br />
            <button
              className="counter__button undo"
              onClick={() => count('UNDO')}
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              onClick={() => count('REDO')}
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre> {
          `{  current Value : ${currVal}
              Previous Value : [${preVal}]
              Future Value : [${futVal}]
            }`}
          </pre>
        </section>
      </div>
    );
  }

export default Counter;
