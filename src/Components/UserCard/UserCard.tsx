import React from 'react'
import { faMobileRetro, faUser, faEnvelope, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons'
import UserDetailsItem from '../UserDetailsItem/UserDetailsItem'
import { User } from '../../services/user-service'
import styles from './UserCard.module.scss'

const UserCard: React.FC<{ isPasswordVisible: boolean; data: User }> = ({
    isPasswordVisible,
    data: { firstName, lastName, picture, username, password, birthDate, country, phoneNumber, email },
}) => {
    const onPhoneItemClick = (phoneNumber: string) => (window.location.href = `tel:${phoneNumber}`)
    const onEmailItemClick = (email: string) => (window.location.href = `mailto:${email}`)

    const fullName = `${firstName} ${lastName}`

    return (
        <React.Fragment>
            <img alt='profile' src={picture} />
            <section className={styles.personalInfo}>
                <h2 title={fullName}>{fullName}</h2>
                <h3>
                    {birthDate}, {country}
                </h3>
            </section>

            <section className={styles.userDetails}>
                <UserDetailsItem
                    onClickCallback={() => onPhoneItemClick(phoneNumber)}
                    showPointer
                    itemIcon={faMobileRetro}
                    itemInfo={phoneNumber}
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

export default UserCard
