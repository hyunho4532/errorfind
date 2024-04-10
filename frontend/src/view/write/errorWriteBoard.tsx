import '@toast-ui/editor/dist/toastui-editor.css';
import FirstGroup from './group/FirstGroup';
import SecondGroup from './group/SecondGroup';
import ThirdGroup from './group/ThirdGroup';
import ErrorInsertButton from '../../component/ErrorInsertButton';

function errorWriteBoard() {

    return (
        <>
            <FirstGroup />

            <SecondGroup />

            <ThirdGroup />

            <ErrorInsertButton />
        </>
    )
}

export default errorWriteBoard;