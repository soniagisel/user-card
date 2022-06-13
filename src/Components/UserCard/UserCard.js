import styles from './UserCard.module.scss'
import React from 'react'
import { faMobileRetro, faUser, faEnvelope, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons'
import UserDetailsItem from '../UserDetailsItem/UserDetailsItem'
import { useGetUserQuery } from '../../services/user-service'

const UserCard = ({ isPasswordVisible }) => {
    const { data, isSuccess } = useGetUserQuery()
    const onPhoneItemClick = (cell) => (window.location.href = `tel:${cell}`)
    const onEmailItemClick = (email) => (window.location = `mailto:${email}`)

    if (isSuccess && data) {
        const { first, last } = data.name
        const { large } = data.picture
        const { password, username } = data.login
        const email = data.email
        const { age } = data.dob
        const { country } = data.location
        const cell = data.cell

        return (
            <React.Fragment>
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
                        onClickCallback={() => onPhoneItemClick(cell)}
                        showPointer
                        itemIcon={faMobileRetro}
                        itemInfo={cell}
                    />

                    <UserDetailsItem
                        onClickCallback={() => onEmailItemClick(email)}
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
            </React.Fragment>
        )
    }
}

export default UserCard
