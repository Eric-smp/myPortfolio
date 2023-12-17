import { Dispatch, SetStateAction } from "react";

export type GlobalProps = {
    // visibleMenuMobile:boolean
    // setVisibleMenuMobile:Dispatch<SetStateAction<boolean>>
    visibleMenuLeft:boolean
    setVisibleMenuLeft:Dispatch<SetStateAction<boolean>>
    isSideBarVisible:boolean
    setIsSideBarVisible:Dispatch<SetStateAction<boolean>>
}