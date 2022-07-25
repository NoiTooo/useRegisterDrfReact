import styled from "styled-components"
import { AccountMenu } from "./AccountMenu"

export const Header = (props) => {
    const {userImage, setShowProfile} = props

    return (
        <HeaderContainer>
            <LeftHeaderContainer>
                <LogoImg src={`${process.env.PUBLIC_URL}/images/marese.png`} alt="Marese" />       
             </LeftHeaderContainer>
             <RightHeaderContainer>
                <AccountMenu userImage={userImage} setShowProfile={setShowProfile} />
             </RightHeaderContainer>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    display: flex;
    height: 80px;
    width: 100%;
    background-color: #FFFFFF;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
`

const LeftHeaderContainer = styled.div`
    flex-grow: 1;
`
const RightHeaderContainer = styled.div`
    flex-grow: 0;
    margin: auto 40px;
`

const LogoImg = styled.img`
    width: 130px;
    margin:20px 40px;
`