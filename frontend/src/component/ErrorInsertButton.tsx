import { useRecoilValue } from 'recoil'
import '../view/write/scss/component/Button.scss'
import { ErrorBoard } from '../model/ErrorBoard'
import { errorBoard } from '../recoil/Atom'

function ErrorInsertButton() {

    const errorBoardData = useRecoilValue<ErrorBoard>(errorBoard);

    const errorInsertButton = () => {
        console.log(errorBoardData.selectedPlatformData);
        console.log(errorBoardData.errorTypeData);
        console.log(errorBoardData.errorFileData);
    }

    return (
        <button className ="error-insert-button" onClick={errorInsertButton}>
            에러 등록 완료!
        </button>
    )
}


export default ErrorInsertButton