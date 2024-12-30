import clsx from 'clsx'
import { Heart } from 'lucide-react'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <>
      <Heart className="h-6 w-6 m-1" />
      <span className="hidden font-bold sm:inline-block m-1">MedDashboard</span>
    </>
  )
}
