import React, { useEffect, useState } from 'react'
import UserCard from './Components/UserCard/UserCard'
import styles from './App.module.scss'
import { useGetUserQuery } from './services/user-service'
import CardSpinner from './Components/CardSpinner/CardSpinner'
import Spinner from './Components/Spinner/Spinner'
import ErrorMessage from './Components/ErrorMessage/ErrorMessage'

const App: React.FC = () => {
    const { refetch, isFetching, isLoading, error, data, isSuccess } = useGetUserQuery()
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
                    {isFetching ? (
                        <CardSpinner />
                    ) : (
                        isSuccess && data && <UserCard isPasswordVisible={isPasswordVisible} data={data} />
                    )}
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
