import {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";
import '../scss/ErrorWirteBoard.scss';
import {useRecoilState} from "recoil";
import {selectedErrorTypeState} from "../../../recoil/Atom.tsx";

function SecondGroup() {

    const [errorTypeData, setErrorTypeData] = useState([]);
    const [selectedErrorTypeData, setSelectedErrorTypeData] = useRecoilState(selectedErrorTypeState)

    useEffect(() => {
        axios.post("http://localhost:50000/errorTypeData")
            .then(response => {
                setErrorTypeData(response.data);
            })
            .catch(error => {
                console.error(error);
            })
        
    }, []);


    useEffect(() => {
        console.log(selectedErrorTypeData);
    }, [selectedErrorTypeData]);


    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedErrorTypeData(e.target.value);
    }

    const SecondGroup = () => {
        return (
            <div className="error-write-board-component-second-group">
                <h2 className="error-write-board-component-kind">2. 에러 종류를 선택해주세요 😏😏</h2>
                <div className="selectBox">
                    <select name="fruits" className="select" onChange={handleSelectChange}>
                    { errorTypeData.map((value) => <option>{value}</option> )}
                    </select>
                </div>
            </div>

        )
    }

    return <SecondGroup />
}

export default SecondGroup