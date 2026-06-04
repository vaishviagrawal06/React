import React from 'react'
import App from './App'
import { useReducer } from 'react'

const count = () => {

    function reducer(count, action) {
        if (action.type == "inc") {
            return count + 1
        }
        else if (action.type == "dec") {
            return count - 1
        }
        else if(action.type=="count"){
            return 0
        }
        return count
    }

    let [count, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => dispatch({ type: "inc" })}>++</button>
            <button onClick={() => dispatch({ type: "dec" })}>--</button>
            <button onClick={() => dispatch({ type: "count" })}>count</button>


        </div>
    )
}

export default count