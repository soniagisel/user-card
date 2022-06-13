import React, { useState } from 'react'
import UserCard from './Components/UserCard/UserCard'
import styles from './App.module.scss'
import { useGetUserQuery } from './services/user-service'
import CardSpinner from './Components/CardSpinner/CardSpinner'
import Spinner from './Components/Spinner/Spinner'

const App = () => {
    const { refetch, isFetching, isLoading, error } = useGetUserQuery()
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    if (isLoading) return <Spinner />

    if (error)
        return (
            <div>
                <p>
                    We found an error, please
                    <a
                        href='#/'
                        onClick={(event) => {
                            event.preventDefault()
                            refetch()
                        }}
                    >
                        try again
                    </a>
                </p>
            </div>
        )

    const togglePasswordVisivility = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }
    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <section className={styles.userInfoContainer}>
                    {isFetching ? <CardSpinner /> : <UserCard isPasswordVisible={isPasswordVisible} />}
                </section>
                <section className={styles.buttonsSection}>
                    <button onClick={refetch} disabled={isFetching}>
                        Fetch New User
                    </button>
                    <button onClick={togglePasswordVisivility}>{isPasswordVisible ? 'Hide' : 'Reveal'} Password</button>
                </section>
            </div>
        </div>
    )
}

export default App
