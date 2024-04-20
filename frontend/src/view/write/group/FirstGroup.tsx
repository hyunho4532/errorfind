    import {ChangeEvent, useEffect, useState} from "react";
    import axios from "axios";
    import '../scss/errorWirteBoard.scss';
    import {useRecoilState} from "recoil";
    import {errorBoard} from "../../../recoil/Atom.tsx";
    import { ErrorBoard } from "../../../model/ErrorBoard.tsx";

    function FirstGroup() {

        const [platformData, setPlatformData] = useState([]);

        const [errorBoardData, setErrorBoardData] = useRecoilState<ErrorBoard>(errorBoard)

        useEffect(() => {
            axios.post("http://localhost:50000/platformData")
                .then(response => {
                    setPlatformData(response.data);
                })
                .catch(error => {
                    console.error(error);
                })
            
        }, []);

        const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
            const newSelectedPlatformData: string = e.target.value;

            setErrorBoardData({ ...errorBoardData, selectedPlatformData: newSelectedPlatformData });
        }

        const FirstGroup = () => {
            return (
                <div className="error-write-board-component-first-group">
                    <h2 className="error-write-board-component-where-title">1. 에러가 어디에서 발생했나요? 🤔🤔</h2>
                    <div className="selectBox">
                        <select name="fruits" className="select" value={errorBoardData.selectedPlatformData} onChange={handleSelectChange}>
                            { platformData.map((value) => <option>{value}</option>) }
                        </select>
                    </div>
                </div>
            )
        }

        return <FirstGroup />
    }

    export default FirstGroup