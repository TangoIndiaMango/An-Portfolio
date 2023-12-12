
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    className?: string,
    children: React.ReactNode
}

const MaxWidthWrapper = ({ className, children }: Props) => {
    return (
        <div className={cn('mx-auto w-full mt-10 max-w-screen-xl px-2.5 md:px-20', className)}>{children}</div>
    )
}

export default MaxWidthWrapper