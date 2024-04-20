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
                <img width={140} height={60} className="header-logo" src="../../../public/errorfind_logo.jpg" />
                <div className="header-main-title">
                    <button className="header-login" onClick={loginClick}>로그인</button>
                    <p className="header-error-write">에러 등록하기</p>
                </div>
            </div>

            <Modal
                open={modalIsOpen}
                onClose={modalClose}>

                <div className="modal">
                    <Typography className="modal-login-title">ErrorFind를 이용해주셔서 감사합니다.</Typography>
                    <Typography className="modal-login-errorfind-platform">erorrFind는 다른 사람들에게 에러를 공유해 서로 공유하면서 해결하는 플랫폼을 지원하겠습니다!</Typography>
                    <Typography className="modal-login-options-prompt">아래 카카오, 구글 로그인 중 원하는 로그인을 선택해주세요!!</Typography>

                    <div className="modal-login-kind">
                        <div>
                            <button>
                                <img width={60} height={60} src="../../../public/google_logo.png" />
                            </button>
                            
                            <p className="modal-login-google-text">구글 로그인</p>
                        </div>

                        <div>
                            <button>
                                <img width={60} height={60} src="../../../public/kakao.jpg" />
                            </button>

                            <p className="modal-login-kakao-text">카카오 로그인</p>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Header