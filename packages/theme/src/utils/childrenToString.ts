export function childrenToString(children: any): string {
  if (!children) {
    return ''
  }
  if (children.props && children.props.children) {
    children = children.props.children
  }
  if (children.props && children.props.children) {
    children = children.props.children
  }

  if (typeof children === 'string') {
    return children
  }

  if (typeof children === 'undefined') {
    return ''
  }

  if (Array.isArray(children)) {
    return children
      .map(el => {
        if (typeof el === 'string') {
          return el
        } else {
          return childrenToString(el)
        }
      })
      .join('')
  }

  return ''
}
