import './index.css'

const ThumbnailItem = props => {
  const {eachItem, fun, isActive} = props
  const {thumbnailUrl, id, thumbnailAltText} = eachItem

  const funcCall = () => {
    fun(id)
  }

  return (
    <li>
      <button
        className={`BTNsTY ${isActive ? '' : 'opact'}`}
        onClick={funcCall}
        type="button"
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
