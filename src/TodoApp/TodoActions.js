import { RiDeleteBin2Line, RiOpenArmLine } from 'react-icons/ri'
import { Button } from '../UI/Button'
import styles from './TodoActions.module.css'

export const TodoActions = ({ clearAll, clearDone, doneCount }) => {
  return (
    <div className={styles.TodoActions}>
      <Button
        onClick={clearAll}
        title="remove ALL todos"
        className={styles.iconDellAll}
      >
        <RiDeleteBin2Line />
      </Button>
      <Button
        onClick={clearDone}
        disabled={!doneCount}
        title="remove done todos"
      >
        <RiOpenArmLine />
      </Button>
    </div>
  )
}
