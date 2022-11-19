import {useState} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem'

const HistoryList = props => {
  const {initialHistoryList} = props
  const [message, setMessage] = useState([''])
  const [list, setList] = useState(initialHistoryList)

  const onChangeValue = event => {
    setMessage(event.target.value)
  }
  const SearchItems = () =>
    initialHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(message.toLowerCase()),
    )

  const deleteValue = id => setList(list.filter(eachItem => eachItem.id !== id))

  return (
    <div className="container">
      <div className="historyTab">
        <img
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          className="historyName"
          alt="app logo"
        />

        <div className="searchIcons">
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            className="searchIcon"
            alt="search"
          />
        </div>
        <div className="searchBar">
          <input
            type="search"
            className="historySearch"
            placeholder="Search history"
            value={message}
            onChange={onChangeValue}
          />
        </div>
      </div>
      <div className="bg-container">
        <ul className="historyItems">
          {SearchItems.map(eachItem => (
            <HistoryItem
              id={eachItem.id}
              timeAccessed={eachItem.timeAccessed}
              logoUrl={eachItem.logoUrl}
              title={eachItem.title}
              domainUrl={eachItem.domainUrl}
              deleteValue={deleteValue}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default HistoryList
