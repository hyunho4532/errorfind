import { useState } from 'react'
import './Header.scss'
import { Modal, Typography } from '@mui/material';

function Header() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const loginClick = () => {
        setModalIsOpen(true);
    }

    const modalClose = () => {
        setModalIsOpen(false);
    }

    return (
        <>
            <div className="header-main">
                <img width={140} height={60} className="header-logo" src="../../../public/errorFindLogo.jpg" />
                <div className="header-main-title">
                    <button className="header-login" onClick={loginClick}>로그인</button>
                    <p className="header-error-write">에러 등록하기</p>
                </div>
            </div>

            <Modal
                open={modalIsOpen}
                onClose={modalClose}>

                <div className="modal">
                    <Typography className='modal-error-insert'>ErrorFind를 이용해주셔서 감사합니다.</Typography>
                </div>

            </Modal>
        </>
    )
}

export default Header