import React from 'react'

interface SectionProps {
  children: React.ReactNode,
  className?: string,
  id?: string,
  dataSection?: string
}

export function Section({ children, className, id, dataSection }: SectionProps) {
  return (
    <section
      id={id}
      data-section={dataSection}
      className={`${className}`}
    >
      {children}
    </section>
  )
}