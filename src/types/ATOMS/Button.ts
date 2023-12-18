import {  MouseEventHandler, ReactNode } from 'react'

export type TButton={
    label:string
    onClick?: any
    backColor?:string
    backColorHover?:string
    icon?:ReactNode
    insertIcon:boolean
}