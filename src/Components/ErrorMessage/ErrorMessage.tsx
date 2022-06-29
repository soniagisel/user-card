import styles from './ErrorMessage.module.scss'
import { useGetUserQuery } from '../../services/user-service'

const ErrorMessage = () => {
    const { refetch } = useGetUserQuery()

    return (
        <div className={styles.messageContainer}>
            <p>
                We found an error, please{' '}
                <a
                    href='#/'
                    onClick={(event) => {
                        event.preventDefault()
                        refetch()
                    }}
                >
                    try again
                </a>
            </p>
        </div>
    )
}

export default ErrorMessage
