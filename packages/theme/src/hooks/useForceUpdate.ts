import { useReducer } from 'react'

const reducer = (state: boolean) => !state
const useForceUpdate = () => useReducer(reducer, true)[1] as () => void

export default useForceUpdate
