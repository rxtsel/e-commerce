import React from 'react'

export function Body ({ children }: React.PropsWithChildren<{}>) {
  return (
    <body>
      {children}
    </body>
  )
}
