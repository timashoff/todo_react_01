export const TodoActions = ({ clearAll, clearDone, doneCount }) => {
  return (
    <div>
      <button onClick={clearAll} title="remove ALL todos">
        X
      </button>
      <button
        onClick={clearDone}
        disabled={!doneCount}
        title="remove done todos"
      >
        V
      </button>
    </div>
  )
}
