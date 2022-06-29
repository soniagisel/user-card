import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import styles from './UserDetailsItem.module.scss'

interface UserDetailsItemProps {
    onClickCallback?: () => void
    itemIcon: IconDefinition
    itemInfo: string
    showPointer?: boolean
}

const UserDetailsItem: React.FC<UserDetailsItemProps> = ({ onClickCallback, itemIcon, itemInfo, showPointer }) => {
    return (
        <div
            onClick={onClickCallback}
            className={clsx(styles.itemContainer, {
                [styles.showPointer]: showPointer,
            })}
        >
            <FontAwesomeIcon icon={itemIcon} className={styles.icons} />
            <span title={itemInfo}>{itemInfo}</span>
        </div>
    )
}

export default UserDetailsItem
