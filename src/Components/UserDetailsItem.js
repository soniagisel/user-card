import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './UserDetailsItem.module.scss'

const UserDetailsItem = ({ onClickCallback, itemIcon, itemInfo, showPointer }) => {
    return (
        <div onClick={onClickCallback} className={showPointer ? `${styles.showPointer}` : ''}>
            <FontAwesomeIcon icon={itemIcon} className={styles.icons} />
            <span title={itemInfo}>{itemInfo}</span>
        </div>
    )
}

export default UserDetailsItem
