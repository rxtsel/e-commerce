import React from 'react'

interface WrapperProps {
  children: React.ReactNode
  className?: string
}

export function Wrapper ({ children, className }: WrapperProps) {
  return (
    <div className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto ${className}`}>
      {children}
    </div>
  )
}
