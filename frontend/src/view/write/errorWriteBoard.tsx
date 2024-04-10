import './scss/errorWirteBoard.scss';
import {useEffect, useState} from "react";
import axios from "axios";
import {Editor} from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/toastui-editor.css';

function errorWriteBoard() {

    const [errorTypeData, setErrorTypeData] = useState([]);
    const [platformData, setPlatformData] = useState([]);

    useEffect(() => {
        axios.post("http://localhost:50000/errorTypeData")
            .then(response => {

                setErrorTypeData(response.data);

            })
            .catch(error => {
                console.error(error);
            })

        axios.post("http://localhost:50000/platformData")
            .then(response => {
                setPlatformData(response.data);
            })
            .catch(error => {
                console.error(error);
            })

    }, []);

    return (
        <>
            <div className="error-write-board-component-first-group">
                <h2 className="error-write-board-component-where-title">1. 에러가 어디에서 발생했나요? 🤔🤔</h2>
                <div className="selectBox">
                    <select name="fruits" className="select">
                        { platformData.map((value: any) => <option>{value}</option>) }
                    </select>
                </div>
            </div>

            <div className="error-write-board-component-second-group">
                <h2 className="error-write-board-component-kind">2. 에러 종류를 선택해주세요 😏😏</h2>
                <div className="selectBox">
                    <select name="fruits" className="select">
                        { errorTypeData.map((value: any) => <option>{value}</option> )}
                    </select>
                </div>
            </div>

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