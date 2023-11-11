import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderSearchInput = () => {
    const {searchInput, changeSearchInput, enterSearchInput} = props
    const onChangeSearchInput = event => changeSearchInput(event.target.value)
    const onEnterSearchInput = event => {
      if (event.key === 'Enter') {
        enterSearchInput()
      }
    }
    return (
      <div className="search-container">
        <input
          type="search"
          value={searchInput}
          className="search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="icon" />
      </div>
    )
  }

  const renderCategoryProducts = () => {
    const {changeCategory, categoryOptions, activeCategoryId} = props
    const onClickCategory = categoryId => changeCategory(categoryId)
    return (
      <>
        <h1 className="heading">Category</h1>
        <ul className="category-list">
          {categoryOptions.map(eachOption => (
            <li
              key={eachOption.id}
              onClick={() => onClickCategory(eachOption.categoryId)}
            >
              <p
                className={`category ${
                  eachOption.categoryId === activeCategoryId
                    ? 'active'
                    : 'normal'
                }`}
              >
                {eachOption.name}
              </p>
            </li>
          ))}
        </ul>
      </>
    )
  }

  const renderRatingList = () => {
    const {changeRating, activeRatingId, ratingsList} = props
    const onClickRating = ratingId => changeRating(ratingId)
    return (
      <>
        <h1 className="heading">Rating</h1>
        <ul className="rating-list">
          {ratingsList.map(eachRating => (
            <li
              className="each-rating"
              onClick={() => onClickRating(eachRating.ratingId)}
            >
              <img
                src={eachRating.imageUrl}
                className="images"
                alt={`rating ${eachRating.ratingId}`}
              />
              <p
                className={
                  eachRating.ratingId === activeRatingId ? 'active' : 'normal'
                }
              >
                & up
              </p>
            </li>
          ))}
        </ul>
      </>
    )
  }
  const {clearFilters} = props
  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategoryProducts()}
      {renderRatingList()}
      <div className="button-container">
        <button className="button" type="button" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </div>
  )
}

export default FiltersGroup
