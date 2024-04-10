import { useRecoilValue } from 'recoil'
import '../view/write/scss/component/Button.scss'
import { ErrorBoard } from '../model/ErrorBoard'
import { errorBoard } from '../recoil/Atom'
import uuid from 'react-uuid'
import axios from 'axios';

function ErrorInsertButton() {

    const errorBoardData = useRecoilValue<ErrorBoard>(errorBoard);

    const data = {
        id: uuid(),
        selectedPlatformData: errorBoardData.selectedPlatformData,
        errorTypeData: errorBoardData.errorTypeData,
        errorFileData: errorBoardData.errorFileData
    };

    const errorInsertButton = () => {
        axios.post('http://localhost:50000/errorBoardData', data)
            .then(response => {
                console.log('응답 받음:', response.data);
            })
            .catch(error => {
                console.error('에러 발생:', error);
            });
    }

    return (
        <button className ="error-insert-button" onClick={errorInsertButton}>
            에러 등록 완료!
        </button>
    )
}


export default ErrorInsertButton