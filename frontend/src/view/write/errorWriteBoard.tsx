import './scss/errorWirteBoard.scss';
import {Editor} from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/toastui-editor.css';
import FirstGroup from './group/FirstGroup';
import SecondGroup from './group/SecondGroup';

function errorWriteBoard() {

    return (
        <>
            <FirstGroup />

            <SecondGroup />

            <div className="error-write-board-component-second-group">
                <h2 className="error-write-board-component-kind">3. 간략하게 에러 내용을 입력해주세요 😌😌</h2>
                <Editor
                    toolbarItems={[
                        ['heading', 'bold', 'italic', 'strike'],
                        ['hr', 'quote'],
                        ['ul', 'ol', 'task', 'indent', 'outdent'],
                        ['table', 'image', 'link'],
                        ['code', 'codeblock']
                    ]}
                    height="500px"
                >
                </Editor>
            </div>
        </>
    )
}

export default errorWriteBoard;