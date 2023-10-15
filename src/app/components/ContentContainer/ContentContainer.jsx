import styles from './ContentContainer.module.scss'

export const ContentContainer = ({ children, className }) => {
    return (
        <div className={`${styles.content} ${className}`}>{children}</div>
    )
}
