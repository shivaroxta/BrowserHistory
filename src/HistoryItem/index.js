import './index.css'

const HistoryItem = props => {
  const {id, timeAccessed, logoUrl, title, domainUrl, deleteValue} = props
  const onClickDelete = () => {
    deleteValue(id)
  }
  return (
    <div className="history-container">
      <div className="history-items">
        <p className="history">{timeAccessed}</p>
        <img src={logoUrl} className="history" alt="history" />
        <p className="history">{title}</p>
        <p className="history">{domainUrl}</p>
      </div>
      <div className="delete-icon">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete"
          alt="delete"
          onClick={onClickDelete}
        />
      </div>
    </div>
  )
}
export default HistoryItem
