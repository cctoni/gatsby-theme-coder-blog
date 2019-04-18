import { useEffect } from 'react'
import useForceUpdate from './useForceUpdate'

const useDoubleRender = () => useEffect(useForceUpdate(), [])

export default useDoubleRender
