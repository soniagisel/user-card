import styles from './App.module.scss'
import React, { useCallback, useEffect, useState } from 'react'
import fetchUserData from './api/userApi'
import { faMobileRetro, faUser, faEnvelope, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons'
import UserDetailsItem from './Components/UserDetailsItem/UserDetailsItem'
import Spinner from './Components/Spinner/Spinner'
import debounce from './utils/debounce'

const App = () => {
    const [userData, setUserData] = useState(null)

    const fetchNewUser = useCallback(async () => await fetchUserData().then((data) => setUserData(data)), [])
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    useEffect(() => {
        fetchNewUser()
    }, [fetchNewUser])

    if (userData === null) {
        return <Spinner />
    }

    const { first, last } = userData.name
    const { large } = userData.picture
    const { password, username } = userData.login
    const email = userData.email
    const { age } = userData.dob
    const { country } = userData.location
    const cell = userData.cell

    const refreshCard = debounce(async () => {
        await fetchNewUser()
        setIsPasswordVisible(false)
    }, 300)

    const togglePasswordVisivility = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    const onPhoneItemClick = () => (window.location.href = `tel:${cell}`)

    const onEmailItemClick = () => (window.location = `mailto:${email}`)

    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <img alt='profile' src={large} />
                <section className={styles.personalInfo}>
                    <h2 title={`${first} ${last}`}>
                        {first} {last}
                    </h2>
                    <h3>
                        {age}, {country}
                    </h3>
                </section>

                <section className={styles.userDetails}>
                    <UserDetailsItem
                        onClickCallback={onPhoneItemClick}
                        showPointer
                        itemIcon={faMobileRetro}
                        itemInfo={cell}
                    />

                    <UserDetailsItem
                        onClickCallback={onEmailItemClick}
                        showPointer
                        itemIcon={faEnvelope}
                        itemInfo={email}
                    />

                    <UserDetailsItem itemIcon={faUser} itemInfo={username} />

                    <UserDetailsItem
                        itemIcon={isPasswordVisible ? faUnlock : faLock}
                        itemInfo={isPasswordVisible ? password : '∗'.repeat(password.length)}
                    />
                </section>

                <section className={styles.buttonsSection}>
                    <button onClick={refreshCard}>Fetch New User</button>
                    <button onClick={togglePasswordVisivility}>{isPasswordVisible ? 'Hide' : 'Reveal'} Password</button>
                </section>
            </div>
        </div>
    )
}

export default App
