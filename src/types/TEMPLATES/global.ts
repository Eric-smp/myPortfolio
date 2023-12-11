import { Dispatch, SetStateAction } from "react";

export type GlobalProps = {
    visibleMenuMobile:boolean
    setVisibleMenuMobile:Dispatch<SetStateAction<boolean>>
}