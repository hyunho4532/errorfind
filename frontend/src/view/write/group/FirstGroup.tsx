import {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";
import '../scss/ErrorWirteBoard.scss';
import {useRecoilState} from "recoil";
import {selectedPlatformState} from "../../../recoil/Atom.tsx";

function FirstGroup() {

    const [platformData, setPlatformData] = useState([]);
    const [selectedPlatformData, setSelectedPlatformData] = useRecoilState(selectedPlatformState)

    useEffect(() => {
        axios.post("http://localhost:50000/platformData")
            .then(response => {
                setPlatformData(response.data);
            })
            .catch(error => {
                console.error(error);
            })
        
    }, []);

    useEffect(() => {
        console.log(selectedPlatformData);
    }, [selectedPlatformData]);

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedPlatformData(e.target.value);
    }

    const FirstGroup = () => {
        return (
            <div className="error-write-board-component-first-group">
                <h2 className="error-write-board-component-where-title">1. 에러가 어디에서 발생했나요? 🤔🤔</h2>
                <div className="selectBox">
                    <select name="fruits" className="select" value={selectedPlatformData} onChange={handleSelectChange}>
                        { platformData.map((value) => <option>{value}</option>) }
                    </select>
                </div>
            </div>
        )
    }

    return <FirstGroup />
}

export default FirstGroup