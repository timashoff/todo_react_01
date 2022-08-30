import styles from './Button.module.css'
export const Button = (props) => {
  const { children, disabled = false } = props
  return (
    <button {...props} disabled={disabled} className={styles.Button}>
      {children}
    </button>
  )
}
