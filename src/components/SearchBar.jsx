import { useState } from "react"

function SearchBar(props) {

  const handleSearchChange = (event) => {
    props.setSearchInputValue(event.target.value)

    // Aqui filtramos. COMO?
    // const filtro = props.allProducts.filter((eachProduct) => {
    //   if (eachProduct.name.startsWith(event.target.value) === true) {
    //     return true
    //   } else {
    //     return false
    //   }
    // })
    // props.setAllProducts(filtro)

  }

  return (
    <div className="search-bar container">
      
      <h2>Search Bar</h2>
        
      <input onChange={handleSearchChange} value={props.searchInputValue} type="text" />

    </div>
  )
}

export default SearchBar