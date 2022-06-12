import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import styles from './Spinner.module.scss'

const Spinner = () => {
    return (
        <div className={styles.spinner}>
            <FontAwesomeIcon color='white' size='6x' icon={faSync} spin />)
        </div>
    )
}

export default Spinner
