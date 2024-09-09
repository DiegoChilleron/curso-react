import { useState } from "react"

export const CounterApp = () => {

    const [state, setCounter] = useState({

        counter1: 10,
        counter2: 20,
        counter3: 30,

    })

    const { counter1, counter2, counter3 } = state;

    return (
        <>
            <h1>Counter 1: {counter1}</h1>
            <h1>Counter 2: {counter2}</h1>
            <h1>Counter 3: {counter3}</h1>
            <hr />

            <h2>Counter 1</h2>
            <button className="btn btn-primary" onClick={() => setCounter({ ...state, counter1: counter1 + 1 })}>+1</button>
            <button className="btn btn-primary" onClick={() => setCounter({ ...state, counter1: counter1 - 1 })}>-1</button>
            <hr />
            <h2>Counter 2</h2>
            <button className="btn btn-primary" onClick={() => setCounter({ ...state, counter2: counter2 + 1 })}>+1</button>
            <button className="btn btn-primary" onClick={() => setCounter({ ...state, counter2: counter2 - 1 })}>-1</button>
            <hr />
            <h2>Counter 3</h2>
            <button className="btn btn-primary" onClick={() => setCounter({ ...state, counter3: counter3 + 1 })}>+1</button>
            <button className="btn btn-primary" onClick={() => setCounter({ ...state, counter3: counter3 - 1 })}>-1</button>
            <hr />
        </>
    )
}
