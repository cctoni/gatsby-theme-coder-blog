import React from 'react'
import { Subtract } from 'utility-types'
import { Location } from '@reach/router'
import { Location as HLocation } from 'history'

export type WithRouterProp = { router: Window['location'] & HLocation }

const withRouter = <P extends WithRouterProp>(Component: React.ComponentType<P>) =>
  class WithRouter extends React.Component<Subtract<P, WithRouterProp>> {
    render() {
      return <Location>{({ location }) => <Component {...this.props as P} router={location} />}</Location>
    }
  }

export default withRouter
