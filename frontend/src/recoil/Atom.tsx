import { atom } from "recoil";
import { ErrorBoard } from "../model/ErrorBoard";
import { PageList } from "../model/PageList";

export const errorBoard = atom<ErrorBoard>({
    key: "errorBoard",
    default: {
        selectedPlatformData: "",
        errorTypeData: "",
        errorFileData: "",
        errorSituationData: ""
    }
});

export const page = atom<PageList>({
    key: "pageCount",
    default: {
        pageCount: 1
    }
})