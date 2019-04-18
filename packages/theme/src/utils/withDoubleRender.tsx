import React from 'react'
import useDoubleRender from '../hooks/useDoubleRender'

const withDoubleRender = <P extends object>(Component: React.ComponentType<P>) => (props: P) => {
  useDoubleRender()
  return <Component {...props} />
}

export default withDoubleRender
