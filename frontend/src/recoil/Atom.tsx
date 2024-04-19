import { atom } from "recoil";
import { ErrorBoard } from "../model/ErrorBoard";

export const errorBoard = atom<ErrorBoard>({
    key: "errorBoard",
    default: {
        selectedPlatformData: "",
        errorTypeData: "",
        errorFileData: "",
        errorSituationData: ""
    }
});