import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'

export const Button = ({text='Button', url='/', className}) => {
  return (
    <Link href={url}>
    <button className={clsx('bg-green-500 hover:bg-green-600 duration-200 px-4 py-2 rounded-sm w-max text-white', className)}>{text}</button>
    </Link>
  )
}
