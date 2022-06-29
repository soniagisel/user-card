import styles from './CardSpinner.module.scss'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const CardSpinner: React.FC = () => (
    <div className={styles.cardSpinnerContainer}>
        <FontAwesomeIcon color='#74adde' size='3x' icon={faCircleNotch} spin />
    </div>
)

export default CardSpinner
