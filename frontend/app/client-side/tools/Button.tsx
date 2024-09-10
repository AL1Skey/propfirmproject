import React from 'react'

const Button = ({children}:Readonly<{children:React.ReactNode}>) => {
  return (
    <button className="border border-1 border-white p-2">{children}</button>
  )
}

export default Button
