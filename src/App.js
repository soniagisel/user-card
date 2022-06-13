import React, { useState, useEffect } from 'react'
import UserCard from './Components/UserCard/UserCard'
import styles from './App.module.scss'
import { useGetUserQuery } from './services/user-service'
import CardSpinner from './Components/CardSpinner/CardSpinner'
import Spinner from './Components/Spinner/Spinner'
import ErrorMessage from './Components/ErrorMessage/ErrorMessage'

const App = () => {
    const { refetch, isFetching, isLoading, error } = useGetUserQuery()
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    useEffect(() => {
        if (isFetching) {
            setIsPasswordVisible(false)
        }
    }, [isFetching])

    if (error) {
        return <ErrorMessage />
    }

    if (isLoading) {
        return <Spinner />
    }

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
                    <button onClick={togglePasswordVisivility} disabled={isFetching}>
                        {isPasswordVisible ? 'Hide' : 'Reveal'} Password
                    </button>
                </section>
            </div>
        </div>
    )
}

export default App
