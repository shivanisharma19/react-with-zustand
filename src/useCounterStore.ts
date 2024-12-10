import { create } from "zustand"

export type Action = 'INCREMENT' | 'DECREMENT' | 'UNDO' | 'REDO'

interface Counter {
    currVal : number
    futVal : number[]
    preVal: number[]
} 

const useCounterStore = create<Counter>()(() => ({
    currVal: 0,
    futVal: [],
    preVal: [],
}))

export const count = (action : Action, value?: number) => {
    switch(action) {
        case 'INCREMENT' : useCounterStore.setState((state) => ({ 
            currVal : state.currVal + value, 
            futVal: [], 
            preVal: [state.currVal, ...state.preVal]
        }))
        break;
        case 'DECREMENT' : useCounterStore.setState((state) => ({ 
            currVal : state.currVal - value,
            futVal: [], 
            preVal: [state.currVal, ...state.preVal]
        }))
        break;
        case 'UNDO' : useCounterStore.setState((state) => ({
            currVal: state.preVal[0],
            futVal: [state.currVal, ...state.futVal],
            preVal: state.preVal.slice(1),
        }))
        break;
        case 'REDO' : useCounterStore.setState((state) => ({
            currVal: state.futVal[0],
            futVal: state.futVal.slice(1),
            preVal: [state.currVal, ...state.preVal]
        }))
        break;
        default: return null
    }
}

export default useCounterStore