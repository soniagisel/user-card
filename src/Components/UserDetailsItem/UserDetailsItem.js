import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './UserDetailsItem.module.scss'
import clsx from 'clsx'

const UserDetailsItem = ({ onClickCallback, itemIcon, itemInfo, showPointer }) => {
    return (
        <div
            onClick={onClickCallback}
            className={clsx(styles.itemContainer, showPointer ? `${styles.showPointer}` : '')}
        >
            <FontAwesomeIcon icon={itemIcon} className={styles.icons} />
            <span title={itemInfo}>{itemInfo}</span>
        </div>
    )
}

export default UserDetailsItem
