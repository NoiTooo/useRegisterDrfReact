import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import axios from "axios"
import styled from "styled-components"

// components
import { Navigation } from "../components/Navigation"
import { Header } from "../components/Header"
import { Profile } from "../components/Profile"


export const MyPage = () => {
    const jwtToken = `${useCookies()[0].jwtToken}`
    const [cookies, setCookie, removeCookie] = useCookies(["jwtToken"])

    // userInfo
    const [userId, setUserId] = useState("")
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [userImage, setUserImage] = useState("")

    const [showProfile, setShowProfile] = useState(false)

    useEffect(() => {
        if (jwtToken === ''){
            removeCookie("jwtToken")
        }
        axios.get(`${process.env.REACT_APP_HOST}/api/auth/users/me`,
        {headers: {
            'Authorization': `JWT ${jwtToken}`
        }})
        .then((res) => {
            setUserId(res.data.id)
            setEmail(res.data.email)
            setUserName(res.data.username)
            setLastName(res.data.last_name)
            setFirstName(res.data.first_name)
            setUserImage(res.data.userimage)
        })
        .catch((error) => {
            window.location.href = '../login'
        })
    })

    // updateUser
    const onChangeUpdateUserName = (event) => setpdateUserName(event.target.value)
    const [catchError, setCatchError] = useState(false)
    const [updateUserName, setpdateUserName] = useState(userName)

    
    const onClickProfile = () => {
        axios.patch(`${process.env.REACT_APP_HOST}/api/auth/users/me/`, 
        {'username': updateUserName},
        {headers:{
            'Authorization': `JWT ${jwtToken}`
        }})
        .catch((error) => {
            setCatchError(true)
        })
    }

    return (
        <>
        <Main>
            <Header 
                userImage={userImage}
                setShowProfile={setShowProfile}
            />
            <Wrapper>
                <Navigation />
                { showProfile === true &&
                    <Profile 
                        userId={userId}
                        email={email}
                        userName={userName}
                        lastName={lastName}
                        firstName={firstName}
                        userImage={userImage}                       
                    />
                }
            </Wrapper>
        </Main>
        </>
    )
}

const Main = styled.main`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #F8F8FF;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
`