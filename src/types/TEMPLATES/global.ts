import { Dispatch, SetStateAction } from "react";

export type GlobalProps = {
    visibleMenuLeft:boolean
    setVisibleMenuLeft:Dispatch<SetStateAction<boolean>>
    isSideBarVisible:boolean
    setIsSideBarVisible:Dispatch<SetStateAction<boolean>>
}