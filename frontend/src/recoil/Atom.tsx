import { atom } from "recoil";

export const selectedPlatformState = atom ({
    key: "selectedPlatform",
    default: ""
})

export const selectedErrorTypeState = atom ({
    key: "selectedErrorType",
    default: ""
})