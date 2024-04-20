import './Header.scss'

function Header() {
    return (
        <div className="header-main">
            <img width={140} height={60} className="header-logo" src="../../../public/errorFindLogo.jpg" />
            <div className="header-main-title">
                <p className="header-login">로그인</p>
                <p className="header-error-write">에러 등록하기</p>
            </div>
        </div>
    )
}

export default Header