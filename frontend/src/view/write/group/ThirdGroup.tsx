import {useEffect, useState} from "react";
import '../scss/ErrorWirteBoard.scss';

function ThirdGroup() {

    const FileUpload = () => {

        const [fileContent, setFileContent] = useState<string>('');

        useEffect(() => {
            console.log(fileContent);

        }, [fileContent])

        const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0];
            const reader = new FileReader();

            reader.onload = () => {
                const content = reader.result as string;
                setFileContent(content);
            }

            reader.readAsText(file!);
        }

        return (
            <div className="error-write-board-component-third-group">
                <h2 className="error-write-board-component-error-title">3. 로그 파일을 올려주세요 (* 내용 출력 *) 😌😌</h2>
                <form>
                    <input
                        className="error-write-board-component-error+"
                        type="file"
                        name="file"
                        onChange={handleFileUpload}
                    />
                </form>
            </div>
        );
    }

    return <FileUpload />
}

export default ThirdGroup