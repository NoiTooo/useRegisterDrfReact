import styled from "styled-components"

import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'


export const Profile = (props) => {
    const {userId, email, userName, lastName, firstName, userImage} = props

    return(
        <>
        <ProfileLayer>
            <h2>Profile</h2>
            <ProfileContainer>
                <UpperRow>
                    <Avatar sx={{ width: 150, height: 150 }} src={userImage}/>
                    <UpperRowRight>
                        <p id="userId">ID: {userId}</p>
                        <p>ユーザー名：{userName === '' ? <>未設定</> : `${userName}` }</p>
                    </UpperRowRight>
                </UpperRow>
                <MiddleRow>
                    <Divider />
                    <FormControl>
                        <p>姓：{lastName === null ? <>未設定</> : `${lastName}` }</p>
                        <p>名：{firstName === null ? <>未設定</> : `${firstName}`}</p>
                    </FormControl>
                </MiddleRow>
            </ProfileContainer>
        </ProfileLayer>
        </>
    )
}

const ProfileLayer = styled.div`
    position: relative;
    left: 30px;
    h2 {
        font-weight: normal;
    }
`
const ProfileContainer = styled.div`
    background-color: #FFFFFF;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 90%;
    padding: 40px;
`
const UpperRow = styled.div`
    display: flex;
`
const UpperRowRight = styled.div`
    flex-grow: 1;
    margin-left: 30px;
    #userId {
        font-size: 14px;
        color: gray;
    }
`
const MiddleRow = styled.div`
    padding-top: 30px;
`

const FormControl = styled.div`
    padding-top: 10px;
    display: flex;
    p {
        width: 50%;
    }
`