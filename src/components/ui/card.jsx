import React from 'react'

export function Card ({ className, children, ...props }) {
  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardHeader ({ className, children, ...props }) {
  return (
    <div className={`p-4 border-b ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardTitle ({ className, children, ...props }) {
  return (
    <h2 className={`text-xl font-semibold ${className}`} {...props}>
      {children}
    </h2>
  )
}

export function CardContent ({ className, children, ...props }) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  )
}
