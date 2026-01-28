function EmptyMessage({ tasks }) {
  return (
    <>
      {tasks.length === 0 && <h3>No tasks yet. Add one!</h3>}
    </>
  )
}
export default EmptyMessage;