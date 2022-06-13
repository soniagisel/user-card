import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import styles from './Spinner.module.scss'

const Spinner = () => {
    return (
        <div className={styles.spinner}>
            <FontAwesomeIcon color='white' size='4x' icon={faCircleNotch} spin />
        </div>
    )
}

export default Spinner
