import '@toast-ui/editor/dist/toastui-editor.css';
import FirstGroup from './group/FirstGroup';
import SecondGroup from './group/SecondGroup';
import ThirdGroup from './group/ThirdGroup';
import ErrorInsertButton from '../../component/ErrorInsertButton';
import Card from '@mui/material/Card';

function errorWriteBoard() {

    return (
        <>
            <Card variant="outlined">
                <FirstGroup />

                <SecondGroup />

                <ThirdGroup />

                <ErrorInsertButton />
            </Card>
        </>
    )
}

export default errorWriteBoard;