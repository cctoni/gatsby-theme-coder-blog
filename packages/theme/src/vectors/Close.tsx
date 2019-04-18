import React from 'react'
export default (props: React.ComponentProps<'svg'>) => (
  <svg width={14} height={14} viewBox="0 0 14 14" {...props}>
    <g fillRule="evenodd" clipRule="evenodd">
      <path d="M13.7.3c.4.4.4 1 0 1.4l-12 12a1 1 0 0 1-1.4-1.4l12-12a1 1 0 0 1 1.4 0z" />
      <path d="M.3.3a1 1 0 0 1 1.4 0l12 12a1 1 0 0 1-1.4 1.4l-12-12A1 1 0 0 1 .3.3z" />
    </g>
  </svg>
)
